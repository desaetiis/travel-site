import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon"); //targeting the icon
        this.menuContent = $(".site-header__menu-content");
        this.events(); //calling this in the constructor ensures that
        // the browser is listening for click events from creation
    }
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible"); //what happens when we click the menu icon - functionality
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;