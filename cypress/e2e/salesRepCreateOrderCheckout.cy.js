//Pages
import HomePage from "../pages/HomePage";
import CustomersPage from "../pages/CustomersPage";
import AtOncePage from "../pages/AtOncePage";
import ProductOrderPage from "../pages/ProductOrderPage";
import BasketPage from "../pages/BasketPage";
import CheckoutPage from "../pages/CheckoutPage";

//Test Data
import { Users } from "../fixtures/Users";
import { TestData } from "../fixtures/TestData"

describe("Asics Staging B2B tests", () => {
  const homePage = new HomePage();
  const customersPage = new CustomersPage();
  const atOncePage = new AtOncePage();
  const productOrderPage = new ProductOrderPage();
  const basketPage = new BasketPage();
  const checkoutPage = new CheckoutPage();


  it("First test", () => {
    homePage.visit();
    homePage.signIn(Users.signInUser.username, Users.signInUser.password);
    homePage.login(Users.loginUser.username, Users.loginUser.password);
    customersPage.selectCustomer(TestData.customerData.customerName);
    homePage.loginUnderThisAccount(TestData.customerData.AccountName);

    // this is a workaround for now as At once locator has some issue related to screen resolution and it stops navigation
    cy.visit(
      "https://frontend.stg.b2b-asics.com/aop/sales#/orders/590122889/at-once"
    );
    //cy.get('a[class*="contextmenu"]').first().click();

    atOncePage.selectProduct(TestData.customerData.product);
    productOrderPage.styleID.invoke("text").should("eq", TestData.customerData.styleId);
    productOrderPage.quantity.clear().type('1');
    productOrderPage.addToBasket.click();
    productOrderPage.basketIcon.click();

    basketPage.checkoutButton.click();

    checkoutPage.verifyDownload();
    checkoutPage.enetrPurchaseOrderNumber();
    checkoutPage.submitOrderButton.click();

  });
});
