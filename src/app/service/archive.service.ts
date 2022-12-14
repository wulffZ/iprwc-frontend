import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const path = 'http://localhost:8080/api/user/reservations/archive'

@Injectable({
    providedIn: 'root'
})
export class ArchiveService {

    constructor(private http: HttpClient) {
    }

    loadArchive() {
        return this.http.get(path, {params: {order: 'asc'}});
    }
}
