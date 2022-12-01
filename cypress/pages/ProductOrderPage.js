class ProductOrderPage {
  get styleID() {
    return cy.get('div[class="product-info"] span[class="product-info-label"]').last();
  }

  get quantity() {
    return cy.get('div[class*="flex items-center"] input[inputmode="numeric"]').first();
  }

  get addToBasket() {
    return cy.contains('Add to basket')
  }

  get basketIcon() {
    return cy.get('div[class="flex items-center mini-basket"] div[class*="relative flex items-center"]').first();
  }
}

export default ProductOrderPage;
