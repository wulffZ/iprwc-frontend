import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../model/category";

const path = "http://localhost:8080/api/car"

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

    store(title: string, description: string, category: Category, manufacturer: string, year: number, km: number, cylinders: number, engine_displacement: number, thumbnail_uri: string) {

      return this.http.post(path, {
        title, description, category, manufacturer, year, km, cylinders, engine_displacement, thumbnail_uri
      })
    }
}
