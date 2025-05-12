import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class SkillsSection extends LightningElement {
    skills = [
        {
            id: 1,
            title: 'Administration',
            description: 'Skilled in declarative automation, user management, and system configuration.',
            image: IMAGES + '/admin.png'
        },
        {
            id: 2,
            title: 'Training',
            description: 'Experienced in mentoring teams and creating technical onboarding guides.',
            image: IMAGES + '/service.png'
        },
        {
            id: 3,
            title: 'Service',
            description: 'Customer support automation, Service Cloud setup, and case lifecycle management.',
            image: IMAGES + '/service.png'
        }
    ];
}
