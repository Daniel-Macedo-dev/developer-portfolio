import { defineConfig, devices } from "@playwright/test";

/**
 * Por padrão testa o build de produção local (webServer gerenciado).
 * Defina PLAYWRIGHT_BASE_URL para rodar a mesma suíte contra outra
 * origem (ex.: o deployment real de produção).
 */
const externalBaseUrl = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: "list",
  use: {
    baseURL: externalBaseUrl ?? "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    {
      name: "mobile",
      // Pixel 7 mantém a cobertura em Chromium (único browser instalado);
      // viewport reduzido para 390 para casar com o QA visual.
      use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } },
    },
  ],
  webServer: externalBaseUrl
    ? undefined
    : {
        // Build + produção: as jornadas validam o artefato real de deploy.
        command: "npm run build && npm run start",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
