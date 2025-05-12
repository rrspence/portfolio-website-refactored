import { LightningElement } from 'lwc';

export default class NavMenu extends LightningElement {
    handleHamburgerClicked() {
        const navMenu = this.template.querySelector('.nav-wrapper');
        navMenu.classList.toggle('responsive');
    }
}
