import { expect, test } from "@playwright/test";

test("rota inglesa renderiza com html lang correto e conteúdo em inglês", async ({
  page,
}) => {
  await page.goto("/en");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", { level: 1, name: /software development/i }),
  ).toBeVisible();
  await expect(page).toHaveTitle(/Software Developer/);
});

test("rota portuguesa mantém html lang pt-BR", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
});

test("alternador de idioma preserva a rota equivalente do projeto", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "fluxo desktop; mobile coberto em teste próprio");
  await page.goto("/projects/breakinv");
  await page
    .getByRole("navigation", { name: "Idioma" })
    .getByRole("link", { name: "English" })
    .click();
  await expect(page).toHaveURL(/\/en\/projects\/breakinv$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", { name: "Engineering decisions" }),
  ).toBeVisible();

  // E de volta ao português.
  await page
    .getByRole("navigation", { name: "Language" })
    .getByRole("link", { name: "Português" })
    .click();
  await expect(page).toHaveURL(/\/projects\/breakinv$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
});

test("troca de idioma pelo menu mobile", async ({ page, isMobile }) => {
  test.skip(!isMobile, "fluxo do menu mobile");
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .locator("#menu-mobile")
    .getByRole("link", { name: "English" })
    .click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("navegação inglesa permanece em inglês", async ({ page, isMobile }) => {
  test.skip(isMobile, "navegação desktop");
  await page.goto("/en");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Projects" })
    .click();
  await expect(page).toHaveURL(/\/en\/projects$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "What I've built" }),
  ).toBeVisible();
  await expect(page.getByText("main project")).toBeVisible();
});

test("hreflang e canonical presentes na home inglesa", async ({ page }) => {
  await page.goto("/en");
  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", /\/en$/);
  const ptAlt = page.locator('link[rel="alternate"][hreflang="pt-BR"]');
  const enAlt = page.locator('link[rel="alternate"][hreflang="en"]');
  const xDefault = page.locator('link[rel="alternate"][hreflang="x-default"]');
  await expect(ptAlt).toHaveCount(1);
  await expect(enAlt).toHaveCount(1);
  await expect(xDefault).toHaveCount(1);
});
