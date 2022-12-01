class SideMenu {
  get userManagement() {
    return cy.get(
      `ul[class="sidebar-menu-items"] li[class="sidebar-menu-item"] a[href*="user-management"]`
    );
  }


}
export default SideMenu;
