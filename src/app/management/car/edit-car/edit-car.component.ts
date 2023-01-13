import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Car} from "../../../model/car";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../../service/car.service";
import {Category} from "../../../model/category";
import {ImgurService} from "../../../service/imgur.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './edit-car.component.html',
})
export class EditCarComponent implements OnInit {

  showSuccess = false;
  showFail = false;

  car_id: number;
  private sub: any;
  car?: Car;
  category?: Category;
  thumbnail?: null;

  constructor(private route: ActivatedRoute, private carService: CarService, private categoryService: CategoryService, private imgurService: ImgurService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.car_id = +params['car_id'];
    });

    this.carService.show(this.car_id).subscribe(
      data => {
        this.car = data['payload'];
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
    if (this.thumbnail != null) {
      this.imgurService.upload(this.thumbnail).subscribe(res => this.store(res));
    } else {
      this.store();
    }
  }

  store(thumbnail_uri?) {
    this.carService.update(this.car_id, this.car.title, this.car.description, this.car.category, this.car.manufacturer, this.car.price, this.car.year, this.car.km, this.car.cylinders, this.car.engine_displacement, thumbnail_uri == null ? this.car['thumbnailUri'] : thumbnail_uri['data'].link).subscribe(
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
  }
}
