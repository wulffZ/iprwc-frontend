import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {TokenStorageService} from "../service/token.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenService: TokenStorageService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.tokenService.getToken();

        if (currentUser == null) {
            void this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

            return false;
        }

        return true;
    }
}
