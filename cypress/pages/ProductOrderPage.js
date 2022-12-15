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
    return cy.get('div[class="flex items-center mini-basket"] i[class="fa fa-cart-shopping fa-lg"]').first();
  }

  get plusIcon() {
    return cy.get('i[class="fa fa-plus fa-lg"]');
  }

  get product() {
    return cy.get('a[href*="1011B472"]').first();
  }

  get basketVerticalFlex() {
    return cy.get('button[type="button"] i[class="fa fa-ellipsis-vertical fa-xl"]').first();
  }

  get createNewBasket() {
    return cy.get('i[class="fa fa-plus"]');
  }

  selectProduct(quantity){
    this.plusIcon.click();
    this.quantity.clear().type(quantity);
    return this;
  }
}

export default ProductOrderPage;
