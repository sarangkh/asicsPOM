import Menu from "./SideMenu";

class CustomersPage {

  get customerSearch() {
    return cy.get("#customers-search");
  }

  selectCustomer(customerName){
    this.customerSearch.type(customerName);
    cy.contains('td', 'THE ATHLETES FOOT BANKSTOWN').click();
    return this
  }
}

export default CustomersPage;
