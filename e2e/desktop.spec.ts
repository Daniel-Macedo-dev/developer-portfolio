import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => isMobile, "jornadas de desktop");

test("home apresenta o perfil e a navegação principal", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /desenvolvimento de software/i,
    }),
  ).toBeVisible();
  const nav = page.getByRole("navigation", { name: "Navegação principal" });
  await expect(nav.getByRole("link", { name: "Projetos" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Sobre" })).toBeVisible();
});

test("navegação leva ao índice de projetos com destaque no BreakInv", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Projetos" })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "O que eu construí" }),
  ).toBeVisible();
  await expect(page.getByText("projeto principal")).toBeVisible();
});

test("case study do BreakInv abre a partir do card em destaque", async ({
  page,
}) => {
  await page.goto("/projects");
  await page.getByRole("link", { name: "BreakInv" }).click();
  await expect(page).toHaveURL(/\/projects\/breakinv$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "BreakInv" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Decisões de engenharia" }),
  ).toBeVisible();

  const repoLink = page.getByRole("link", {
    name: /ver repositório no github/i,
  });
  await expect(repoLink).toHaveAttribute(
    "href",
    "https://github.com/DeD-TechStack/BreakInv",
  );
  await expect(repoLink).toHaveAttribute("target", "_blank");
  await expect(repoLink).toHaveAttribute("rel", /noopener/);
});

test("case studies de GuessMe e JovemTour Store abrem e são distintos", async ({
  page,
}) => {
  await page.goto("/projects/guessme");
  await expect(
    page.getByRole("heading", { level: 1, name: "GuessMe" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /ver repositório no github/i }),
  ).toBeVisible();

  await page.goto("/projects/jovemtour-store");
  await expect(
    page.getByRole("heading", { level: 1, name: "JovemTour Store" }),
  ).toBeVisible();
  // Sem repositório público verificado: o link não deve existir.
  await expect(
    page.getByRole("link", { name: /ver repositório no github/i }),
  ).toHaveCount(0);
});

test("rota de projeto inválida mostra o 404 com caminho de volta", async ({
  page,
}) => {
  const response = await page.goto("/projects/nao-existe");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Página não encontrada" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Voltar ao início" }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("skip link e navegação por teclado alcançam o conteúdo", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Pular para o conteúdo" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#conteudo$/);

  // O CTA primário do hero é alcançável por teclado.
  const cta = page.getByRole("link", { name: /ver projetos/i }).first();
  let reached = false;
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press("Tab");
    if (await cta.evaluate((el) => el === document.activeElement)) {
      reached = true;
      break;
    }
  }
  expect(reached).toBe(true);
});
