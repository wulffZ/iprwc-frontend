import {Component} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: []
})
export class FooterComponent {

    navCategories = [
        {
            display: 'Company',
            items: [
                {
                    display: 'About us',
                    url: 'https://www.cgi.com/en/overview'
                },
                {
                    display: 'Corporate social responsibility',
                    url: 'https://www.cgi.com/en/corporate-social-responsibility'
                },
                {
                    display: 'Partner ecosystem',
                    url: 'https://www.cgi.com/en/ecosystem-partners'
                },
                {
                    display: 'Investors',
                    url: 'https://www.cgi.com/en/investors'
                },
                {
                    display: 'Newsroom',
                    url: 'https://www.cgi.com/en/newsroom'
                },
                {
                    display: 'Media center',
                    url: 'https://www.cgi.com/en/mediacenter'
                }
            ]
        },
        {
            display: 'Support',
            items: [
                {
                    display: 'Accessibility',
                    url: 'https://www.cgi.com/en/accessibility'
                },
                {
                    display: 'Privacy',
                    url: 'https://www.cgi.com/en/privacy'
                },
                {
                    display: 'Terms of use',
                    url: 'https://www.cgi.com/en/legal-restrictions'
                },
                {
                    display: 'Careers FAQ',
                    url: 'https://www.cgi.com/en/careers/faq'
                }
            ]
        }
    ]

    constructor() {}

    ngOnInit(): void {

    }
}
