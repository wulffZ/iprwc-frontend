import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {CarService} from "../service/car.service";
import {Router} from "@angular/router";
import {Car} from "../model/car";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    isLoggedIn = false;
    email?: string;
    currentUser =  { username: 'Not logged in', email: ''};
    cars: Car[];

    constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private carService: CarService, private router: Router) {}

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

            this.carService.index().subscribe(
                data => {
                    this.cars = data['payload'];
                    console.log(this.cars)
                },
                err => {
                    console.log(err)
                }
            );
        }
    }

    showCar(car_id): void {
      void this.router.navigate(['/car', car_id]);
    }

}
