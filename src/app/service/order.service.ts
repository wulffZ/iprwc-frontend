import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Car} from "../model/car";
import {environment} from "../../environments/environment";

const path = environment.apiUrl

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
