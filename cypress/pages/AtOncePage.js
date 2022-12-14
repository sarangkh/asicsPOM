class AtOncePage {
  get productSearch() {
    return cy.get("#product-search");
  }

  selectProduct(ProductName) {
    this.productSearch.clear().type(ProductName);
    cy.get('div[class="flex flex-col h-full items-center justify-start"] img[src*="1011B472_001"]').first().click();
    return this;
  }
}

export default AtOncePage;
