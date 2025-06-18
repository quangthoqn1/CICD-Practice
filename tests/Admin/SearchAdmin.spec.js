import { test, expect } from '@playwright/test';
import { LoginPage } from '../../PO/LoginPage';
import { AdminPage } from '../../PO/AdminPage/Search';

test('Search Admin at Admin Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertUrlAfterLogin();
  await page.waitForTimeout(2000);
  const adminPage = new AdminPage(page);
  await adminPage.NavigateToAdmin();
  await adminPage.InputUserName('Admin');
  await page.waitForTimeout(2000);
  await adminPage.SelectUserDropdownList();
  await page.waitForTimeout(2000);
  await adminPage.InputEmployeeName('#@!! user');
  await page.waitForTimeout(2000);
});
