import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const path = "http://localhost:8080/api/user/location"

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    constructor(
        private http: HttpClient
    ) {
    }

    loadLocations() {
        return this.http.get(path, {params: {order: 'asc'}})
    }

    loadLocationRooms(id: number) {
        return this.http.get(path + "/" + id + "/rooms", {params: {order: 'asc'}})
    }
}
