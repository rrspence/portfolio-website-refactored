import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class HeroSection extends LightningElement {
    imgURL = IMAGES + '/me.jpg';

    handleClick() {
        alert('Contact Me clicked!');
    }
}
