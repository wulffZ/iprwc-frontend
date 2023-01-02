import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.html'
})
export class ChooseCategory implements OnInit {
    categories: Category[];

  constructor(
      private categoryService: CategoryService, private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.index().subscribe(
      data => {
        this.categories = data["payload"];
      });
  }

  createForCategory(category_id: number) {
    void this.router.navigate(['/create-car', category_id]);
  }

  edit(id: number) {
    void this.router.navigate(['/edit-category', id]);
  }

  delete(id: number) {
    this.categoryService.delete(id).subscribe(
      data => {
        void this.router.navigate(['/admin']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
