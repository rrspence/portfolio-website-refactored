import { LightningElement } from 'lwc';
import createLead from '@salesforce/apex/ContactMeController.createLead';


export default class ContactMeButton extends LightningElement {
    dialog;
    firstname;
    lastname;
    company;
    email;
    description;
    snackbar;

    renderedCallback() {
        if (!this.dialog) {
            this.dialog = this.template.querySelector('.contact-dialog');
            this.firstname = this.template.querySelector('.firstname');
            this.lastname = this.template.querySelector('.lastname');
            this.company = this.template.querySelector('.company');
            this.email = this.template.querySelector('.email');
            this.description = this.template.querySelector('.description');
            this.snackbar = this.template.querySelector('c-snackbar');
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
    
        console.log('Attempting to create lead:', JSON.stringify(data));
    
        createLead(data)
            .then(() => {
                this.snackbar.showsnackbar('✅ Your request has been received!');
                this.closeDialog();
            })
            .catch(error => {
                console.error('Apex error:', error);
                const msg = error?.body?.message || '⚠️ Something went wrong. Please try again.';
                this.snackbar.showsnackbar(msg);
            });            
            
        }
    
}
