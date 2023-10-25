const { test, defineConfig, devices, expect } = require('@playwright/test');
//const { projects, name } = require('../playwright.config');

test.describe('visualtesting the page in different viewports', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.applitools.com/index_v2.html')
    });

    //Config viewport has- DesktopchromiumView, DesktopFirefoxView, MobilandroidView, MobileiphonView
    test('desktop chrome', async ({ page }) => {
        defineConfig({
            projects: [
                {
                  use: { ...devices['Desktop Chrome'] },
                },
            ]
        })

        //assert the respective viewport visibility of the button
        await expect(page.locator('#username')).toBeInViewport()
        await expect(page.locator('#password')).toBeInViewport()
        await expect(page.locator('#log-in')).toBeInViewport()
        await expect(page).toHaveScreenshot()
    })

    test('desktop firefox', async ({ page }) => {
        defineConfig({
            projects: [
                {
                  use: { ...devices['Desktop Firefox'] },
                },
            ]
        })

        //assert the respective viewport visibility of the button
        await expect(page.locator('#username')).toBeInViewport()
        await expect(page.locator('#password')).toBeInViewport()
        await expect(page.locator('#log-in')).toBeInViewport()
        await expect(page).toHaveScreenshot()
    })

    test('mobile iphone-iphone13', async ({ page }) => {
        defineConfig({
            projects: [
                {
                  use: { ...devices['Pixel 5'] },
                },
            ]
        })

        //assert the respective viewport visibility of the button
        await expect(page.locator('#username')).toBeInViewport()
        await expect(page.locator('#password')).toBeInViewport()
        await expect(page.locator('#log-in')).toBeInViewport()
        await expect(page).toHaveScreenshot()
    })

    test('mobile chrome-pixel5', async ({ page }) => {
        defineConfig({
            projects: [
                {
                  use: { ...devices['iPhone 13'] },
                },
            ]
        })
       
    //assert the respective viewport visibility of the button
    await expect(page.locator('#username')).toBeInViewport()
    await expect(page.locator('#password')).toBeInViewport()
    await expect(page.locator('#log-in')).toBeInViewport()
    await expect(page).toHaveScreenshot()
    })
    
});