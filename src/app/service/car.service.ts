import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../model/category";
import {environment} from "../../environments/environment";

const path = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {}

    index() {
        return this.http.get(path, {})
    }

    show(id: number) {
        return this.http.get(path + "/" + id, {})
    }

    store(title: string, description: string, category: Category, manufacturer: string, price: number, year: number, km: number, cylinders: number, engine_displacement: number, thumbnail_uri: string) {
      return this.http.post(path, {
        title, description, category, manufacturer, price, year, km, cylinders, engine_displacement, thumbnail_uri
      })
    }

    update(id: number, title: string, description: string, category: Category, manufacturer: string, price: number, year: number, km: number, cylinders: number, engine_displacement: number, thumbnail_uri: string) {
      return this.http.put(path + "/" + id, {
        title, description, category, manufacturer, price, year, km, cylinders, engine_displacement, thumbnail_uri
      });
    }

    delete(id: number) {
      return this.http.delete(path + "/" + id, {});
    }
}
