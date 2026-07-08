/**
 * Workflow de QA visual: captura screenshots full-page das rotas
 * principais em uma matriz de viewports, contra um servidor já em
 * execução (produção por padrão).
 *
 * Uso:
 *   npm run build && npm run start   (em outro terminal)
 *   node scripts/visual-qa.mjs [outDir]
 *
 * A saída padrão (.qa-screenshots/) é ignorada pelo Git.
 * Screenshots são artefatos temporários de inspeção, não baselines.
 */
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.QA_BASE_URL ?? "http://localhost:3000";
const outDir = process.argv[2] ?? ".qa-screenshots";

const routes = [
  ["home", "/"],
  ["projects", "/projects"],
  ["breakinv", "/projects/breakinv"],
  ["guessme", "/projects/guessme"],
  ["jovemtour", "/projects/jovemtour-store"],
  ["api-supermercado", "/projects/supermercado-api"],
  ["about", "/about"],
  ["not-found", "/rota-invalida"],
];

const viewports = [
  [1920, 1080],
  [1440, 900],
  [1366, 768],
  [1024, 768],
  [768, 1024],
  [480, 900],
  [390, 844],
  [360, 800],
];

const browser = await chromium.launch();
await mkdir(outDir, { recursive: true });

for (const [width, height] of viewports) {
  const context = await browser.newContext({
    viewport: { width, height },
    // Layout estático completo: sem estados intermediários de animação.
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const [name, route] of routes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    // Screenshots full-page não disparam whileInView abaixo da dobra:
    // rola a página inteira para revelar as seções (once: true) antes.
    await page.evaluate(async () => {
      const step = window.innerHeight / 2;
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    const file = path.join(outDir, `${name}-${width}x${height}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`captured ${file}`);
  }
  await context.close();
}

await browser.close();
console.log(`done: ${routes.length * viewports.length} screenshots in ${outDir}`);
