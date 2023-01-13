import {Component} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {PermissionHelper} from "../helpers/permission.helper";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  isLoggedIn = false;
  email?: string;
  currentUser = {username: 'Not logged in', email: ''};
  isAdmin = false;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private permissionHelper: PermissionHelper) {
  }

  navItems = [
    {
      display: 'Dashboard',
      path: '/dashboard'
    },
  ];

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.authService.getUserDetails().subscribe(
        userData => {
          const roles = userData.roles;

          this.currentUser.email = userData.email;
          this.currentUser.username = userData.name;

          const permissions = this.permissionHelper.rolesToPermissionsList(roles);

          this.isAdmin = this.permissionHelper.hasAdminPermission(permissions);

          if (this.isAdmin) {
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
}
