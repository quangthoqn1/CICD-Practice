// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  retries: 0,
  testDir: './tests',
  use: {
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],
});
