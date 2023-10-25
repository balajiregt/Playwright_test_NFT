const { test } = require('@playwright/test');
// Test 1: Test DemoQA automation practice form with custom gremlin species and a 30-second timeout
test('test1', async ({ page }) => {
    // Load gremlins.js library
    await page.addInitScript({
        path: './node_modules/gremlins.js/dist/gremlins.min.js',
    });
    // Navigate to the test page
    await page.goto('https://demoqa.com/automation-practice-form');
// Execute chaos testing with custom species and a 30-second timeout
    await page.evaluate(() =>
        Promise.race([
            new Promise(resolve => {
                gremlins.createHorde({
                    species: [
                        gremlins.species.clicker({
                            clickTypes: ['click'],
                            canClick: function (element) {
                                return !element.classList.contains('left-pannel');
                            },
                        }),
                        gremlins.species.formFiller(),
                        gremlins.species.typer(),
                        gremlins.species.scroller()
                    ],
                    mogwais: [
                        gremlins.mogwais.alert()
                    ],
                    distribution: [0.25, 0.25, 0.25, 0.25],
                    delay: 250
                })
                    .unleash();
            }),
            new Promise(resolve => setTimeout(resolve, 50000)) // 30 seconds timeout
        ])
    )
});