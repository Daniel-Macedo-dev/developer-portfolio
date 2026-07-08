import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => isMobile, "cobertura de mídia no desktop");

test("case study do BreakInv exibe screenshots reais sem falha de carregamento", async ({
  page,
}) => {
  const failedMedia: string[] = [];
  page.on("response", (response) => {
    if (response.url().includes("/projects/") && response.status() >= 400) {
      failedMedia.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.goto("/projects/breakinv");
  await expect(
    page.getByRole("heading", { name: "O produto em telas" }),
  ).toBeVisible();

  const figures = page.locator("figure");
  await expect(figures).toHaveCount(5);

  const firstImage = figures.first().locator("img");
  await firstImage.scrollIntoViewIfNeeded();
  await expect(firstImage).toBeVisible();
  // Imagem realmente decodificada, não um frame quebrado.
  await expect
    .poll(async () =>
      firstImage.evaluate((el: HTMLImageElement) => el.naturalWidth),
    )
    .toBeGreaterThan(0);

  expect(failedMedia, failedMedia.join("; ")).toHaveLength(0);
});

test("GuessMe e JovemTour exibem suas galerias de produto", async ({
  page,
}) => {
  await page.goto("/projects/guessme");
  await expect(page.locator("figure")).toHaveCount(3);

  await page.goto("/projects/jovemtour-store");
  await expect(page.locator("figure")).toHaveCount(4);
});
