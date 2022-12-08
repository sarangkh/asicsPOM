class MyBasketPage {
  get search() {
    return cy.get('#pending-baskets-search');
  }

  selectBasket(basketId){
    this.search.type(basketId);
    cy.wait(5000);
    cy.get('.vuetable-body > tr > :nth-child(1)').click();

    return this;
  }

}

export default MyBasketPage;
