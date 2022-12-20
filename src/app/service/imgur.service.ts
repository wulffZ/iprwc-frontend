import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../model/category";

const path = "http://localhost:8080/api/car"

@Injectable({
    providedIn: 'root'
})
export class ImgurService {

    private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
    private readonly clientId = 'edc8d0f5c3550ad';

    constructor(private http: HttpClient) {}

    upload(b64Image: any) {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Client-ID ${this.clientId}`
        }),
      };
      const formData = new FormData();
      formData.append('image', b64Image);
      return this.http.post(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
    }
}
