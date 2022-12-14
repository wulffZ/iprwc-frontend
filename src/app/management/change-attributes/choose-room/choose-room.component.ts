import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkroomService} from "../../../service/workroom.service";
import {MeetingroomService} from "../../../service/meetingroom.service";
import {Meetingroom} from "../../../model/meetingroom";
import {Workroom} from "../../../model/workroom";
import {LocationService} from "../../../service/location.service";
import {Location} from "../../../model/location";

@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.component.html'
})
export class ChooseRoomComponent implements OnInit {
    workroomList: Workroom[];
    meetingroomList: Meetingroom[];
    @Input() selectedLocation: Location;
    @Output() selectedRoom = new EventEmitter<{id: number, type: string}>();
    @Output() clickReturnButton = new EventEmitter<Event>();
    filter: boolean = false;
    showMeetingRooms: boolean = false;
    showWorkRooms: boolean = false;
    tableHeaders = ['Room Type', 'Room Number', 'Location Name', 'Maximum Capacity'];

  constructor(
      private workroomService: WorkroomService,
      private meetingroomService: MeetingroomService,
      private locationService: LocationService
  ) { }

  ngOnInit(): void {
      this.loadLocationRooms(this.selectedLocation)
  }

    loadLocationRooms(selectedLocation: Location) {
        this.locationService.loadLocationRooms(selectedLocation.id).subscribe(
            data => {
                this.workroomList = data['payload']['workRooms'];
                this.meetingroomList = data['payload']['meetingRooms'];
            }
        )
    }

    switchFilter() {
      this.filter = !this.filter;
    }

    goBack() {
        this.clickReturnButton.emit();
    }

    clickedRoom(roomId: number, type: string) {
      this.selectedRoom.emit({id: roomId, type: type});
    }

}
