import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('homepage', () => { // 2
  test('to verify aux WCGA rules accessibility issues', async ({ page }) => {
    await page.goto('https://dequeuniversity.com/demo/dream'); // 3
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).not.toEqual([]); // 
  });
});

test('keyboard accessibilty test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment')
  await page.locator('#btn-make-appointment').click()
  await page.locator('#txt-username').click
  await page.locator('#txt-username').type('John Doe')
  await page.locator('#txt-password').click
  await page.locator('#txt-password').type('ThisIsNotAPassword')
  await page.locator('#btn-login').click()
  await page.locator('#btn-make-appointment').click()

  //Navigate to the first field
  await page.keyboard.press('Tab')
  await page.keyboard.press('Space') //press spacebar to list the dropdown values
  await page.keyboard.press('ArrowDown') //press arrow down to naviage the values
  await page.keyboard.press('ArrowDown') //press arrow down to naviage the values
  await page.keyboard.press('Enter') //press enter to select the dropdown value
  await page.keyboard.press('Tab') //navigate to the next field
  await page.keyboard.press('Space') //press spacebar to select the checkbox
  await page.keyboard.press('Tab') //navigate to the next field
  await page.keyboard.press('ArrowRight') //press arrow keys to move to the adjacent radio buttons
  await page.keyboard.press('Enter') //press enter to select the date  
  await page.keyboard.press('Tab') //navigate to the next field
  //await page.keyboard.press('ArrowDown') //press arrow up or down to naviage to the calendarwidget
  //await page.keyboard.press('ArrowRight') //press arrow right or left to naviage to the calender dates
    
  await page.keyboard.type('helloworld', { delay: 100 }) //type the comments in the comment box
  await page.keyboard.press('Backspace') //press backspace/delete to delete the last string value. Here 'd' is deleted
  await page.keyboard.press('Meta+z') //press 'Meta+z' [Mac] or 'Ctrl + z' [Windows] to undo the previous delete 
  await page.keyboard.down('Shift') //keyboard down- is for holding the 'shift' key down
  await page.keyboard.press('Tab')  //press tab [shift + tab] to navigate to the previous field
  await page.keyboard.up('Shift') //keyboard up- is for releasing the 'shift' key
  await page.keyboard.press('ArrowDown') //press arrow up or down to naviage to the calendarwidget
  await page.keyboard.press('ArrowRight') //press arrow right or left to naviage to the calender dates
  await page.keyboard.press('Enter') //press enter to select the date    
  await page.keyboard.press('Tab')// press tab to navigate to the next field
  await page.keyboard.press('Tab') //navigate to the next button
  await page.keyboard.press('Enter') //press enter to submit the appoitment form.
  //await page.getByRole('button', { name: 'Book Appointment' }).click()
  await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/appointment.php#summary')
  //Fetch text content from the h2 element
  const h2Text = await page.locator('.lead').innerHTML()
  expect(h2Text).toContain('Please be informed that your appointment has been booked as following:')

})
