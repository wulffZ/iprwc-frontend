import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from "../../../model/location";
import {LocationService} from "../../../service/location.service";
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
}
