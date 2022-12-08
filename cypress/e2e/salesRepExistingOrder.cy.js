//Pages
// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false;
// });

import HomePage from "../pages/HomePage";
import CustomersPage from "../pages/CustomersPage";
import AtOncePage from "../pages/AtOncePage";
import ProductOrderPage from "../pages/ProductOrderPage";
import BasketPage from "../pages/BasketPage";
import CheckoutPage from "../pages/CheckoutPage";
import NewOrderPage from "../pages/NewOrderPage";
import MyBasketPage from "../pages/MyBasketPage";

//Test Data
import { Users } from "../fixtures/Users";
import { TestData } from "../fixtures/TestData";

describe("Asics Staging B2B tests", () => {
  const homePage = new HomePage();
  const customersPage = new CustomersPage();
  const atOncePage = new AtOncePage();
  const productOrderPage = new ProductOrderPage();
  const basketPage = new BasketPage();
  const checkoutPage = new CheckoutPage();
  const newOrderPage = new NewOrderPage();
  const myBasketPage = new MyBasketPage();

  it("First test", () => {
    homePage.visit();
    homePage.signIn(Users.signInUser.username, Users.signInUser.password);
    homePage.login(Users.loginUser.username, Users.loginUser.password);
    homePage.selectEmployeesListUsers(TestData.employees.user);
    customersPage.selectCustomer(TestData.customerData.customerName);
    homePage.sideMenu.createSalesOrder.click();
    newOrderPage.createSalesOrder();

    atOncePage.selectProduct(TestData.customerData.product);
    productOrderPage.styleID
      .invoke("text")
      .should("eq", TestData.customerData.styleId);

    cy.get(".justify-between > .flex > :nth-child(3) > .text-grey-dark").then(
      function ($elem) {
        cy.log($elem.text());
        productOrderPage.selectProduct(1);
        productOrderPage.addToBasket.click();
        homePage.goToCheckPendingOrders();
        myBasketPage.selectBasket($elem.text());
        productOrderPage.product.click()
      }
    );

   

    // productOrderPage.basketIcon.click();

    // basketPage.checkoutButton.click();

    // checkoutPage.verifyDownload();
    // checkoutPage.enetrPurchaseOrderNumber();
    // checkoutPage.submitOrderButton.click();
  });
});
