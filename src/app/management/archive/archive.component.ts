import {Component, OnInit} from '@angular/core';
import {MeetingroomReservation} from "../../model/meetingroom-reservation";
import {WorkroomReservation} from "../../model/workroom-reservation";
import {ArchiveService} from "../../service/archive.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
    reservations = [];
    meetingRoomReservations: MeetingroomReservation[];
    workRoomReservations: WorkroomReservation[];

    showMeetingRoomReservations = true;
    showWorkRoomReservations = true;

    tableHeaders = ['Type', 'Employee', 'Room number', 'Location', 'Start time', 'End time', 'Was present'];

    constructor(private archiveService: ArchiveService) { }

    ngOnInit(): void {
        this.getArchive()

    }

    getArchive() {
        this.archiveService.loadArchive().subscribe(
            data => {
                this.meetingRoomReservations = data['payload']['meetingRoomReservations'];
                this.workRoomReservations = data['payload']['workRoomReservations'];
                this.formatTimestamps();
                this.reservations.push(...this.meetingRoomReservations);
                this.reservations.push(...this.workRoomReservations);
            });

    }


    formatTimestamps() {
        for(let res of this.meetingRoomReservations) {
            this.toReadableTimestamp(res);
        }

        for(let res of this.workRoomReservations){
            this.toReadableTimestamp(res);
        }
    }

    toReadableTimestamp(res) {
        const startSplitted = res.startTime.split("T");
        startSplitted[1] = startSplitted[1].substring(0, 5);
        res.startTime = startSplitted[0] + " " + startSplitted[1];

        const endSplitted = res.endTime.split("T");
        endSplitted[1] = endSplitted[1].substring(0, 5);
        res.endTime = endSplitted[0] + " " + endSplitted[1];
    }

    toPresentString(present: boolean): string {
        return present === true ? 'Yes' : 'No';
    }


}
