import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    // Necessário para o auto-cleanup do Testing Library entre testes.
    globals: true,
    // Testes de browser vivem em e2e/ e pertencem ao Playwright.
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
