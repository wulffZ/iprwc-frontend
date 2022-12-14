import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Location} from "../model/location";

const path = "http://localhost:8080/api/user/workroom"

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class WorkroomService {

    constructor(
        private http: HttpClient
    ) {
    }

    updateWorkRoom(workroom_id: number, location: Location, maxCapacity: number) {
        return this.http.put(path +"/"+ workroom_id, {
            location,
            maxCapacity
        }, httpOptions);

    }


    loadWorkRooms() {
        return this.http.get(path, {params: {order: 'asc'}})
    }
}
