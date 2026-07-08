import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => !isMobile, "jornadas de mobile");

test("menu mobile abre, navega e fecha ao trocar de rota", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.click();

  const menu = page.locator("#menu-mobile");
  await expect(menu).toBeVisible();
  await menu.getByRole("link", { name: "Projetos" }).click();

  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator("#menu-mobile")).toHaveCount(0);
});

test("Escape fecha o menu mobile e devolve o foco ao botão", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(page.locator("#menu-mobile")).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.locator("#menu-mobile")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
});

test("rotas principais não têm overflow horizontal em 390px", async ({
  page,
}) => {
  for (const route of ["/", "/projects", "/projects/breakinv", "/about"]) {
    await page.goto(route);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow, `overflow em ${route}`).toBeLessThanOrEqual(0);
  }
});

test("case study é legível e navegável no mobile", async ({ page }) => {
  await page.goto("/projects/breakinv");
  await expect(
    page.getByRole("heading", { level: 1, name: "BreakInv" }),
  ).toBeVisible();
  await page.getByRole("link", { name: /próximo: guessme/i }).click();
  await expect(page).toHaveURL(/\/projects\/guessme$/);
});
