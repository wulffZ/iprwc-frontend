import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../model/category";
import {Car} from "../model/car";
import {environment} from "../../environments/environment";

const path = environment.apiUrl

const KEY = 'cart-items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  items: Car[] = [];

  show() {
    return JSON.parse(window.sessionStorage.getItem(KEY));
  }

  remove(car) {
    this.load();

    for (let item of this.items) {
      if (car.id === item.id) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    }

    console.log(this.items);

    window.sessionStorage.removeItem(KEY)
    return window.sessionStorage.setItem(KEY, JSON.stringify(this.items));
  }

  add(car) {
    this.load();

    if(this.items == null) {
      this.items = [];
    }

    if(this.items.length > 0) {
      return alert('You already have a car in your cart. Please checkout first.');
    }

    if (!this.items.includes(car)) {
      this.items.push(car)
      return window.sessionStorage.setItem(KEY, JSON.stringify(this.items));
    }
  }

  private load() {
    this.items = JSON.parse(window.sessionStorage.getItem(KEY));
  }

  clear() {
    window.sessionStorage.removeItem(KEY)
  }
}
