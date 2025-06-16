import { test } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';

test('Login successfully using Page Object Model', async ({ page }) => {
  test.setTimeout(60000); 
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertUrlAfterLogin;
});

