import { TestData } from "../fixtures/TestData";

class CheckoutPage {
  get downloadButton() {
    return cy.get(
      'div[class="header"] button[class*="flex focus:outline-none"]'
    );
  }

  get purchaseOrderNumber() {
    return cy.get('input[placeholder="Enter your reference"]');
  }

  get submitOrderButton() {
    return cy.contains("Submit order");
  }

  enetrPurchaseOrderNumber() {
    this.purchaseOrderNumber.type(
      TestData.customerData.AccountName + Math.floor(Math.random() * 10)
    );
  }

  verifyDownload() {
    this.downloadButton.click();
    cy.verifyDownload(".xls", { contains: true });
    return this;
  }
}

export default CheckoutPage;
