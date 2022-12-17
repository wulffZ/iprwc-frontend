import {Component} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Employee} from "../model/employee";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    isLoggedIn = false;
    email?: string;
    currentUser =  { username:'Not logged in', email: ''};
    isAdmin = false;

    constructor(private tokenStorageService: TokenStorageService, private authService: AuthService) {}

    navItems = [
        {
            display: 'Dashboard',
            path: '/dashboard'
        },
        {
            display: 'Reservation',
            path: '/reservation'
        },
        {
            display: 'Agenda',
            path: '/calendar'
        },
    ];

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
          this.authService.getUserDetails().subscribe(
            data => {
              const employee: Employee = data;
              const roles = employee.roles;

              this.currentUser.email = data.email;
              this.currentUser.username = data.name;

              outerloop:
                for(let i = 0; i<roles.length; i++) {
                  for(const permission of roles[i].permissions) {
                    if(permission === 'ADMIN') {
                      this.isAdmin = true;
                      break outerloop;
                    }
                  }
                }

              if(this.isAdmin){
                this.navItems.push({
                  display: 'Admin',
                  path: '/admin'
                });
              }
            }
          )
        }
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }



    isExpanded: boolean;
}
