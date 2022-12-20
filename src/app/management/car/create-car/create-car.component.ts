import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Car} from "../../../model/car";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../../service/car.service";
import {Category} from "../../../model/category";
import * as CryptoJS from 'crypto-js';
import {Observable, ReplaySubject} from "rxjs";
import {ImgurService} from "../../../service/imgur.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-car.component.html',
})
export class CreateCarComponent implements OnInit {

  showSuccess = false;
  showFail = false;

  category_id: number;
  private sub: any;
  car?: Car;
  category?: Category
  thumbnail?: null;
  base64?: string;

  constructor(private route: ActivatedRoute, private carService: CarService, private categoryService: CategoryService, private imgurService: ImgurService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.category_id = +params['category_id'];
    });

    this.categoryService.show(this.category_id).subscribe(
      data => {
        this.category = data['payload'];
      },
      err => {
        console.log(err);
      }
    );
  }

  onChange(event) {
    this.thumbnail = event.target.files[0];
  }

  async onSubmit(form: NgForm) {
    const title = form.value.title;
    const description = form.value.description;
    const manufacturer = form.value.manufacturer;
    const year = form.value.year;
    const km = form.value.km;
    const cylinders = form.value.cylinders;
    const engine_displacement = form.value.engine_displacement;

    this.imgurService.upload(this.thumbnail).subscribe(res =>
      this.carService.store(title, description, this.category, manufacturer, year, km, cylinders, engine_displacement, res['data'].link).subscribe(
        data => {
          if (data["code"] === "CREATED") {
            this.showSuccess = true;
          }
        },
        err => {
          this.showFail = true;
          console.log(err);
        }
      )
    );
  }
}
