import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../service/car.service";
import {Car} from "../model/car";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id: number;
  private sub: any;
  car?: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.carService.show(this.id).subscribe(
      data => {
        this.car = data['payload'];
      },
      err => {
        console.log(err)
      }
    );
  }
}
