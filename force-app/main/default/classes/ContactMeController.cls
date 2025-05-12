public with sharing class ContactMeController {
    @AuraEnabled
    public static void createLead(String firstname, String lastname, String company, String email, String description) {
        try {
            Lead lead = new Lead(
                FirstName = firstname,
                LastName = lastname,
                Company = company,
                Email = email,
                Description = description,
                Status = 'Open - Not Contacted'
            );

            insert lead;
        } catch (DmlException e) {
            // Surface error to Lightning Web Component
            throw new AuraHandledException('We couldn’t create the lead. It might already exist.');
        }
    }
}
