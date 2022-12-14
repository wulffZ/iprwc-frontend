import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ReservationService} from "../../service/reservation.service";
import {Location} from "../../model/location";

@Component({
    selector: 'app-make-reservation',
    templateUrl: './make-reservation.component.html'
})

export class MakeReservationComponent implements OnInit {
    selectedLocation: Location;
    selectedRoom: number;
    selectedRoomType: string;
    showLocation: boolean = true;
    showRoom: boolean = false;
    showMakeReservation: boolean = false;
    showSucces: boolean = false;
    locationList: Location[];

    @ViewChild('f') reservationForm: NgForm;
    reservationDetails = {
        location: '',
        locationid: null,
        roomtype: '',
        timeslotstart: new Date(),
        timeslotend: new Date()
    }
    submitted = false;

    constructor(private reservationService: ReservationService) {
    }

    ngOnInit(): void {
    }

    showRooms(incomingLocation: Location) {
        this.selectedLocation = incomingLocation;
        this.showRoom = true;
        this.showLocation = false;
        this.showMakeReservation = false;
        this.selectedRoom = null;
    }

    showLocations() {
        this.showMakeReservation = false;
        this.showLocation = true;
        this.showRoom = false;
        this.selectedRoom = null;
        this.selectedLocation = null;
    }

    setLocationList(newLocations: Location[]) {
        this.locationList = newLocations;
    }

    setSelectedRoom(selectedRoom = {id: this.selectedRoom, type: this.selectedRoomType}) {
        this.selectedRoom = selectedRoom.id;
        this.selectedRoomType = selectedRoom.type;
        this.showRoom = false;
        this.showMakeReservation = true;
    }

    onSubmit(form: NgForm) {
        const currentDate = new Date();
        this.submitted = true;
        this.reservationDetails.location = this.selectedLocation.address;
        this.reservationDetails.locationid = this.selectedLocation.id;
        this.reservationDetails.roomtype = this.selectedRoomType;
        const reservationStartTimeString = this.reservationForm.value.date + "T" + this.reservationForm.value.timeslotstart + ":00";
        const reservationStartTimeDate = new Date(reservationStartTimeString);
        const reservationdEndTimeString = this.reservationForm.value.date + "T" + this.reservationForm.value.timeslotend + ":00";
        const reservationEndTimeDate = new Date(reservationdEndTimeString);

        this.reservationDetails.timeslotstart = reservationStartTimeDate;
        this.reservationDetails.timeslotend = reservationEndTimeDate;
        if (this.reservationDetails.timeslotend > this.reservationDetails.timeslotstart) {
            if (this.reservationDetails.roomtype == "meetingroom") {
                this.reservationService.reserveMeetingroom(this.reservationDetails.timeslotend, this.reservationDetails.timeslotstart, true, this.reservationDetails.locationid).subscribe(
                    data => {
                        if (data["code"] === "CREATED") {
                            this.showSucces = true;
                        }
                    },
                    err => {
                        this.showSucces = false;
                    }
                );
            }
            else if (this.reservationDetails.roomtype == "workroom") {
                this.reservationService.reserveWorkroom(this.reservationDetails.timeslotend, this.reservationDetails.timeslotstart, true, this.reservationDetails.locationid).subscribe(
                    data => {
                        if (data["code"] === "CREATED") {
                            this.showSucces = true;
                        }
                    },
                    err => {
                        this.showSucces = false;
                    }
                );
            }
        }
        else {
            this.showSucces = false;
        }
        this.reservationForm.reset();
    }
}
