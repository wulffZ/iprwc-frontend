import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {hashSync} from "bcryptjs";
import {Observable} from "rxjs";

const USER_API = 'http://localhost:8080/api/user';


@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    constructor(private http: HttpClient) {}

    reserveMeetingroom(endTime: Date, startTime: Date, present: boolean, meeting_room_id: number): Observable<any>{
        return this.http.post( USER_API + '/meetingroom/' + meeting_room_id + '/reservations', {
            endTime, startTime, present, meeting_room_id
        }, );
    }

    reserveWorkroom(endTime: Date, startTime: Date, present: boolean, work_room_id: number): Observable<any>{
        return this.http.post( USER_API + '/workroom/' + work_room_id + '/reservations', {
            endTime, startTime, present, work_room_id
        }, );
    }
}
