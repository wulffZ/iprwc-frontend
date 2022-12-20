import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const path = "http://localhost:8080/api/category"

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {}

    index() {
        return this.http.get(path, {})
    }

    show(id: number) {
        return this.http.get(path + "/" + id, {})
    }

    store(title: string, description: string) {

      return this.http.post(path, {
        title, description
      })
    }
}
