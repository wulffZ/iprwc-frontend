import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    isLoggedIn = false;
    email?: string;
    currentUser =  { username: 'Not logged in', email: ''};

    constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
          this.authService.getUserDetails().subscribe(
              data => {
                  this.currentUser.email = data.email;
                  this.currentUser.username = data.name;
              },
              err => {
                  console.log("Failed to get user data " + err)
              });
      } 
  }

    loadReservation(): void {
        this.router.navigate(['reservation'])
    }

}
