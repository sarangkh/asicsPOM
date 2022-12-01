class BasketPage {
  get checkoutButton() {
    return cy.contains('Checkout');
  }

}

export default BasketPage;
