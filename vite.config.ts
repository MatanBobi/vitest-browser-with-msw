/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["test-setup.ts"],
    include: ["**/*.spec.tsx"],
    browser: {
      enabled: true,
      name: "chrome",
    },
  },
});
