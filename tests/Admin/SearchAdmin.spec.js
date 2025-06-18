import { test, expect } from '@playwright/test';
import { LoginPage } from '../../PO/LoginPage';
import { AdminPage } from '../../PO/AdminPage/Search';

test('Search Admin at Admin Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertUrlAfterLogin();
  const adminPage = new AdminPage(page);
  await adminPage.NavigateToAdmin();
  await adminPage.InputUserName('Admin');
  await adminPage.SelectUserDropdownList();
  await adminPage.InputEmployeeName('#@!! user');
  await page.waitForTimeout(3000);
});
