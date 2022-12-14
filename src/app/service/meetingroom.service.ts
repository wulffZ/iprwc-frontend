import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, OnInit} from "@angular/core";
import {Location} from "../model/location";

const path = "http://localhost:8080/api/user/meetingroom"

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class MeetingroomService implements OnInit {

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
    }

    updateMeetingRoom(meetingroom_id: number, location: Location, maxCapacity: number) {
        return this.http.put(path +"/"+ meetingroom_id, {
            location,
            maxCapacity
        }, httpOptions);

    }

    loadMeetingRooms() {
        return this.http.get(path, {params: {order: 'asc'}})
    }
}
