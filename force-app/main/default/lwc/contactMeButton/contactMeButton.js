import { LightningElement } from 'lwc';

export default class ContactMeButton extends LightningElement {
    dialog;

    renderedCallback() {
        if (!this.dialog) {
            this.dialog = this.template.querySelector('.contact-dialog');
        }
    }

    showDialog() {
        this.dialog.showModal();
    }

    closeDialog() {
        this.dialog.close();
    }

    handleSubmit(event) {
        event.preventDefault(); // prevent page reload
        const firstName = this.template.querySelector('.firstname').value;
        console.log('First Name:', firstName);
        this.closeDialog();
    }
}
