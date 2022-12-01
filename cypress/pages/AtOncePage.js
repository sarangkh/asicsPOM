class AtOncePage {
  get productSearch() {
    return cy.get("#product-search");
  }

  selectProduct(ProductName) {
    this.productSearch.type(ProductName);
    cy.get('img[src*="1011B472_001"]').first().click();
    return this;
  }
}

export default AtOncePage;
