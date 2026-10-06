import {test,expect} from '@playwright/test';test('dashboard shell',async({page})=>{await page.setContent('<h1>Failure-Lens</h1>');await expect(page.locator('h1')).toHaveText('Failure-Lens')});
