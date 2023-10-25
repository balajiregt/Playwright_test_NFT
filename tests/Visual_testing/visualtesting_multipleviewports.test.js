const { test, defineConfig, devices, expect } = require('@playwright/test');
//const { projects, name } = require('../playwright.config');

test.describe('visualtesting the page in different viewports', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.applitools.com')
    });

    //Config viewport has- DesktopchromiumView, DesktopFirefoxView, MobilandroidView, MobileiphonView
    test('visual testing the page- desktop chrome', async ({ page }) => {
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
        const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
        await expect.soft(page).toHaveScreenshot();
    })

    test('visual testing the page- desktop firefox', async ({ page }) => {
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
        await expect(page).toHaveScreenshot();
    })

    test('visual testing the page- mobile iphone-iphone13', async ({ page }) => {
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
        await expect(page).toHaveScreenshot();
    })

    test('visual testing the page- mobile chrome-pixel5', async ({ page }) => {
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
        await expect(page).toHaveScreenshot();
    })
    
});