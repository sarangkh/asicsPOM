import SideMenu from "./SideMenu";

class HomePage {
  visit() {
    cy.visit('/');
  }
  constructor() {
    this.sideMenu = new SideMenu();
  }

  get signInFormUserName() {
    return cy.get("#signInFormUsername");
  }

  get signInFormPassword() {
    return cy.get("#signInFormPassword");
  }

  get signInButton() {
    return cy.get('input[name="signInSubmitButton"]').first();
  }

  get acceptCookiesButton() {
    return cy.get(
      'div[class="action-buttons"] button[class="asics-button--primary"]'
    );
  }

  get loginUserName() {
    return cy.get('input[name="login"]');
  }

  get loginPassword() {
    return cy.get('input[name="password"]');
  }

  get loginButton() {
    return cy
      .get(
        'div[class="login-zone-validate"] button[class="asics-button--primary"]'
      )
      .first();
  }

  signIn(signInUser, signInPassword) {
    this.signInFormUserName.type(signInUser, { force: true });
    this.signInFormPassword.type(atob(signInPassword), { force: true });
    this.signInButton.click({ force: true });
    this.acceptCookiesButton.click({ force: true });
  }

  login(loginUser, loginPassword) {
    this.loginUserName.type(loginUser);
    this.loginPassword.type(atob(loginPassword));
    this.loginButton.click();
  }

  loginUnderThisAccount(account) {
    this.sideMenu.userManagement.click();
    cy.contains("td", account)
      .parent()
      .contains("span", "Login under this account")
      .click();
    return this;
  }

  selectEmployeesListUsers(username) {
    cy.contains('Employees').click();
    cy.contains('List users').click();
    cy.get('#users-search').type(username);
    cy.contains("td", username)
    .parent()
    .contains("span", "Login under this account")
    .click();
  return this;
  }

  goToCheckPendingOrders() {
    cy.contains('My orders').click();
    cy.contains('Pending').click();
  return this;
  }
}

export default HomePage;
