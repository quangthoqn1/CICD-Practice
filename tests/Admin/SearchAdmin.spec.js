import { test, expect } from '@playwright/test';
import { LoginPage } from '../../PO/LoginPage';
import { AdminPage } from '../../PO/AdminPage/Search';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertUrlAfterLogin();
});

test('Search Admin at Admin Page', async ({ page }) => {
  const adminPage = new AdminPage(page);
  await adminPage.NavigateToAdmin();
  await adminPage.InputUserName('Admin');
  await adminPage.SelectUserDropdownList();
  await adminPage.SelectStatusDropdownList();
  await adminPage.ClickSearchButton();
  await page.waitForTimeout(2000); // hoặc expect kết quả hiển thị
  await adminPage.assertAdminSearch();
});

