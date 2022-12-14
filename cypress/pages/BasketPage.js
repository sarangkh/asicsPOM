class BasketPage {
  get checkoutButton() {
    return cy.get('.flex-col.h-full > .gap-4 > .flex');
  }

  get continueCheckout() {
    return cy.get('.divide-grey > .hidden > .flex > .capitalize');
  }

}

export default BasketPage;
