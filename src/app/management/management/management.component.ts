import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
    onAdminPage: boolean;

    adminOptions = [
      ['Create listing', 'Create a new car listen for an existing category category'], ['Create category', 'Create a new category for car listings to be listed under.']];

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.onAdminPage = true;
  }

  loadSelectedOption(option: string) {
      switch (option) {
          case this.adminOptions[0][0]:
              this.router.navigate(['choose-category']);
              break;
          case this.adminOptions[1][0]:
            this.router.navigate(['create-category']);
              break;
          default:
              console.log('Option ' + option + 'is not a possible admin option');
      }
  }


}
