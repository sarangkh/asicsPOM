
class NewOrderPage {

  get shipToNumber() {
    return cy.get('.vuetable-body > tr > :nth-child(1)');
  }

  get shipToName() {
    return cy.get('.selected-row > :nth-child(3)');
  }

  get defaultDeliveryAddressCheckbox() {
    return cy.get('div[class="option-circle"] svg');
  }

  createSalesOrder(){
    this.defaultDeliveryAddressCheckbox.click();
    cy.contains('Create Sales order').click();
    return this
  }
}

export default NewOrderPage;
