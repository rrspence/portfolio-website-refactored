import { LightningElement, track } from 'lwc';

export default class Snackbar extends LightningElement {
    @track message = '';
    @track visible = false;

    showsnackbar(msg) {
        this.message = msg;
        this.visible = true;

        // Hide after 3 seconds
        setTimeout(() => {
            this.visible = false;
        }, 3000);
    }
}
