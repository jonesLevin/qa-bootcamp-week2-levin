import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: process.env.TOOLSHOP_URL ?? "https://practicesoftwaretesting.com",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
