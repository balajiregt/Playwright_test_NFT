// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
   
    {
      name: 'Source_version_viewports',
     // use: { ...devices['Pixel 5'],...devices['Desktop Chrome'], ...devices['Desktop Firefox'],...devices['iPhone 12'] },
      testMatch:'tests/Visual_testing/visualtesting_multipleviewports.test.js'
    },
    {
      name: 'actual_version_v2_viewports',
      //use: { ...devices['Pixel 5'],...devices['Desktop Chrome'], ...devices['Desktop Firefox'],...devices['iPhone 12'] },
      testMatch:'tests/Visual_testing/visualtesting_multipleviewports2.test.js',
      //dependencies: ['Stable_version_viewports']
    },

    {
      name:'Accessibiilty',
      use:{...devices['Desktop Firefox']},
      testDir:'tests/Accessability_testing'
    },
    {
      name:'monkey_testing',
      use:{...devices['Desktop Chrome']},
      testDir:'tests/Resilience_testing'
    }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

