class BasketPage {
  get checkoutButton() {
    return cy.get('div[class="flex sm:flex-col gap-4 items-center justify-center"] button[class*="flex focus:outline-none justify"]');
  }

}

export default BasketPage;
