import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/car";

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-car.html'
})
export class ChooseCar implements OnInit {
  cars: Car[];

  constructor(
    private carService: CarService, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.carService.index().subscribe(
      data => {
        this.cars = data["payload"];
      });
  }

  edit(id: number) {
    void this.router.navigate(['/edit-car', id]);
  }

  delete(id: number) {
    this.carService.delete(id).subscribe(
      data => {
        void this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
