class SideMenu {
  get userManagement() {
    return cy.get(
      `ul[class="sidebar-menu-items"] li[class="sidebar-menu-item"] a[href*="user-management"]`
    );
  }

  get createSalesOrder() {
    return cy.get(
      'a[href*=salesOrder]'
    );
  }

}
export default SideMenu;
