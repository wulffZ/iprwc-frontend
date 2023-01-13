import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
})
export class CreateCategoryComponent implements OnInit {

  showSuccess = false;
  showFail = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    const description = form.value.description;

    this.categoryService.store(title, description).subscribe(
      data => {
         if (data["code"] === "CREATED") {
          this.showSuccess = true;
        }
      },
      err => {
        this.showFail = true;
        console.log(err);
      }
    );
  }

}
