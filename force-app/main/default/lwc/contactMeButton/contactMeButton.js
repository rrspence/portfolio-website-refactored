import { LightningElement } from 'lwc';

export default class ContactMeButton extends LightningElement {
    dialog;
    firstname;
    lastname;
    company;
    email;
    description;

    renderedCallback() {
        if (!this.dialog) {
            this.dialog = this.template.querySelector('.contact-dialog');
            this.firstname = this.template.querySelector('.firstname');
            this.lastname = this.template.querySelector('.lastname');
            this.company = this.template.querySelector('.company');
            this.email = this.template.querySelector('.email');
            this.description = this.template.querySelector('.description');
        }
    }    

    showDialog() {
        this.dialog.showModal();
    }

    closeDialog() {
        this.dialog.close();
    }

    handleSubmit(event) {
        event.preventDefault();
    
        const data = {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            company: this.company.value,
            email: this.email.value,
            description: this.description.value
        };
    
        console.log('Form submitted with:', data);
        this.closeDialog();
    }
    
}
