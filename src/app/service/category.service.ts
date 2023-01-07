import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

const path = environment.apiUrl  + "/category"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

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

  update(id: number, title: string, description: string) {
    return this.http.put(path + "/" + id, {
      title, description
    })
  }

  delete(id: number) {
    return this.http.delete(path + "/" + id, {});
  }
}
