import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "../../model/location";
import {MeetingroomService} from "../../service/meetingroom.service";
import {WorkroomService} from "../../service/workroom.service";


@Component({
  selector: 'app-change-attributes',
  templateUrl: './change-attributes.component.html'
})
export class ChangeAttributesComponent implements OnInit {
    selectedLocation: Location;
    selectedRoom: number;
    selectedRoomType: string;

    showLocation: boolean = true;
    showRoom: boolean = false;
    showRoomEdit: boolean = false;

    locationList: Location[];

    changedLocation: number;
    changedMaxCapacity: number;
    responseText: string;

  constructor(
      private router: Router,
      private meetingRoomService: MeetingroomService,
      private workRoomService: WorkroomService
  ) { }

  ngOnInit(): void {}

  showRooms(incomingLocation: Location) {
      this.selectedLocation = incomingLocation;
      this.changedLocation = incomingLocation.id;
      this.showRoom = true;
      this.showLocation = false;
      this.showRoomEdit = false;
      this.selectedRoom = null
  }

  showLocations() {
      this.showRoomEdit = false;
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
      this.changedMaxCapacity = null;
      this.responseText = null;
      this.showRoomEdit = true;
  }

  submitChanges() {
      const selectedLocation = this.locationList.find((location) => location.id === this.changedLocation);

      if (this.selectedRoomType === 'meetingroom') {
          this.meetingRoomService.updateMeetingRoom(this.selectedRoom, selectedLocation, this.changedMaxCapacity).subscribe(
              data => {
                  this.responseText = "The MeetingRoom has successfully updated!";
                  this.changedMaxCapacity = null;
              }, err => {
                  console.log(err);
                  this.responseText = "Something went wrong, please try again!";
              }
          )
      } else if (this.selectedRoomType === 'workroom') {
          this.workRoomService.updateWorkRoom(this.selectedRoom, selectedLocation, this.changedMaxCapacity).subscribe(
              data => {
                  this.responseText = "The Workroom has successfully updated!";
                  this.changedMaxCapacity = null;
              }, err => {
                  console.log(err);
                  this.responseText = "Something went wrong, please try again!";
              }
          )
      }
  }



}
