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
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent implements OnInit {

  showSuccess = false;
  showFail = false;

  category_id: number;
  private sub: any;
  category?: Category

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

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

  async onSubmit(form: NgForm) {
    this.categoryService.update(this.category.id, this.category.title, this.category.description).subscribe(
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
