import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../model/category";
import {Car} from "../model/car";
import {AuthService} from "./auth.service";

const path = "http://localhost:8080/api/order"

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  store(user, car: Car, delivery_address: string,) {
      return this.http.post(path, {
        user, car, delivery_address
      });
  }
}
