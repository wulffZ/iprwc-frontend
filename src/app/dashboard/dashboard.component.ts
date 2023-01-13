import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {CarService} from "../service/car.service";
import {Router} from "@angular/router";
import {Car} from "../model/car";
import {CartService} from "../service/cart.service";
import {NgForm} from "@angular/forms";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIn = false;
  email?: string;
  currentUserObject? :Object
  currentUser = {username: 'Not logged in', email: ''};
  cars: Car[];
  cart: Car[];

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private carService: CarService, private cartService: CartService, private orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.authService.getUserDetails().subscribe(
        data => {
          this.currentUserObject = data;
          this.currentUser.email = data.email;
          this.currentUser.username = data.name;
        },
        err => {
          console.log("Failed to get user data " + err)
        });

      this.carService.index().subscribe(
        data => {
          this.cars = data['payload'];
        },
        err => {
          console.log(err)
        }
      );

      this.cart = this.cartService.show();
    }
  }

  onSubmit(form: NgForm) {
    const delivery_address = form.value.delivery_address;
    let car = this.cartService.show()[0];

    return this.orderService.store(this.currentUserObject, car, delivery_address).subscribe(
      data => {
        if (data["code"] === "CREATED") {
          alert("Your order has been created. Please refer to your email for more information")

          this.cartService.clear();
          this.refreshCart();
          this.ngOnInit();
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  refreshCart() {
    this.cart = this.cartService.show();
  }

  remove(car) {
    this.cartService.remove(car);
    this.refreshCart();
  }

  showCar(car_id): void {
    void this.router.navigate(['/car', car_id]);
  }

  addToCart(car): void {
    this.cartService.add(car);
    this.refreshCart();
  }

}
