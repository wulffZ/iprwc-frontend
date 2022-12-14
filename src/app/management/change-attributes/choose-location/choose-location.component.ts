import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from "../../../model/location";
import {LocationService} from "../../../service/location.service";

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html'
})
export class ChooseLocationComponent implements OnInit {
    locationList: Location[];
    @Output() locationListCopy = new EventEmitter<Location[]>();
    @Output() clickLocation = new EventEmitter<Location>();

  constructor(
      private locationService: LocationService
  ) { }

  ngOnInit(): void {
      this.loadLocationList();
  }

  loadLocationList() {
      this.locationService.loadLocations().subscribe(
          data => {
              this.locationList = data["payload"];
          })
  }

  switchShowRooms(selectedLocation: Location) {
      this.clickLocation.emit(selectedLocation);
      this.locationListCopy.emit(this.locationList);
  }
}
