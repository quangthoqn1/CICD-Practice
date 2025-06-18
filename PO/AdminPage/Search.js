// pages/LoginPage.js
const { expect } = require('@playwright/test');

class AdminPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.NavigatetoAdminPage = page.locator("//a[@href = '/web/index.php/admin/viewAdminModule']");
    this.usernameInput = page.locator("(//input[@class = 'oxd-input oxd-input--active'])[2]");
    this.UserDropdown = page.locator("(//div[@class = 'oxd-select-text-input'])[1]");
    this.SelectRoleUser = page.locator("(//div[@class = 'oxd-select-option'])[2]");
    this.EmployeeNameInput = page.locator("//input[@placeholder = 'Type for hints...']");
    this.StatusDropdown = page.locator("(//div[@class = 'oxd-select-text-input'])[2]");
    this.SelectStatus = page.locator("(//div[@class = 'oxd-select-option'])[2]");
    this.Searchbutton = page.locator("//button[@type = 'submit']");
    this.Resetbutton = page.locator("(//button[@type = 'button'])[5]");
  }

  async NavigateToAdmin () {
    await this.NavigatetoAdminPage.click();
  }

  async InputUserName(username) {
    await this.usernameInput.fill(username);
  }

  async SelectUserDropdownList() {
    await this.UserDropdown.click();
    await this.SelectRoleUser.click();
  }

  async InputEmployeeName(employeename) {
    await this.usernameInput.fill(employeename);
  }

  async SelectStatusDropdownList() {
    await this.StatusDropdown.click();
    await this.SelectStatus.click();
  }
}

module.exports = { AdminPage };
