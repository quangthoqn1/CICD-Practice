// PO/AdminPage.js
const { expect } = require("@playwright/test");

class AdminPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }
  // Define locators
  get NavigatetoAdminPage() {
    return this.page.locator(
      "//a[@href = '/web/index.php/admin/viewAdminModule']"
    );
  }
  get usernameInput() {
    return this.page.locator(
      "(//input[@class = 'oxd-input oxd-input--active'])[2]"
    );
  }

  get UserDropdown() {
    return this.page.locator("(//div[@class = 'oxd-select-text-input'])[1]");
  }

  get SelectOption() {
    return this.page.locator("(//div[@class = 'oxd-select-option'])[1]");
  }

  get SelectOptioninDropdown() {
    return this.page.locator("(//div[@class = 'oxd-select-option'])[2]");
  }

  get EmployeeNameInput() {
    return this.page.locator("//input[@placeholder = 'Type for hints...']");
  }

  get SelectEmployeeName() {
    return this.page.locator("//span[text() = 'Mahmoud  Salah']");
  }

  get StatusDropdown() {
    return this.page.locator("(//div[@class = 'oxd-select-text-input'])[2]");
  }

  get SelectStatus() {
    return this.page.locator("(//div[@class = 'oxd-select-option'])[2]");
  }

  get Searchbutton() {
    return this.page.locator("//button[@type = 'submit']");
  }

  get Resetbutton() {
    return this.page.locator("(//button[@type = 'button'])[5]");
  }

  async assertAdminSearch() {
  await expect(this.page.getByRole('cell', { name: 'Admin' }).first()).toBeVisible();
}

  async NavigateToAdmin() {
    await this.NavigatetoAdminPage.click();
    //await this.page.waitForURL('**/admin'); // Đợi trang admin load
  }

  async InputUserName(username) {
    //await expect(this.usernameInput).toBeVisible({ timeout: 10000 });
    await this.usernameInput.fill(username);
  }

  async SelectUserDropdownList() {
    await this.UserDropdown.click();
    await this.SelectOption.click();
  }

  async SelectStatusDropdownList() {
    await this.StatusDropdown.click();
    await this.SelectStatus.click();
  }

  async ClickSearchButton() {
    await this.Searchbutton.click();
  }
}

module.exports = { AdminPage };
