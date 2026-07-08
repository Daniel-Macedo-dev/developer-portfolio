import { expect, test } from "@playwright/test";

/**
 * Regressão permanente: na V2 foi encontrado um defeito em que todo o
 * conteúdo dentro de Reveal ficava invisível (opacity 0) para usuários
 * com prefers-reduced-motion, por causa do estado inicial emitido no SSR.
 */
test.use({ contextOptions: { reducedMotion: "reduce" } });

test("conteúdo permanece visível com prefers-reduced-motion ativo", async ({
  page,
}) => {
  await page.goto("/");
  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toBeVisible();
  await expect
    .poll(async () =>
      h1.evaluate((el) => {
        const wrapper = el.closest("div");
        return wrapper ? Number(getComputedStyle(wrapper).opacity) : 0;
      }),
    )
    .toBeGreaterThan(0.99);

  // Seção abaixo da dobra também revela ao entrar na viewport.
  const educationHeading = page.getByRole("heading", {
    name: "Base acadêmica e técnica",
  });
  await educationHeading.scrollIntoViewIfNeeded();
  await expect(educationHeading).toBeVisible();
  await expect(page.getByText("FATEC Zona Sul").first()).toBeVisible();
});
