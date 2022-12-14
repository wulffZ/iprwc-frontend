import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
    onReservation: boolean;

    reservationOptions = ['Make Reservation', 'View Reservations', 'Edit Reservations'];

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.onReservation = true;
    }

    loadSelectedOption(option: string) {
        switch (option) {
            case this.reservationOptions[0]:
                this.router.navigate(['make-reservation']);
                break;
            case this.reservationOptions[1]:
                this.router.navigate(['my-reservation']);
                break;
            case this.reservationOptions[2]:
                this.router.navigate(['edit-reservation']);
                break;
        }
    }


}
