import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
    onAdminPage: boolean;

    adminOptions = ['Archive', 'Delete Employee Account', 'Change Room Attributes'];

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.onAdminPage = true;
  }

  loadSelectedOption(option: string) {
      switch (option) {
          case this.adminOptions[0]:
              this.router.navigate(['archive']);
              break;
          case this.adminOptions[1]:
              //todo: implement this option
              break;
          case this.adminOptions[2]:
              this.router.navigate(['change-attributes']);
              break;
          default:
              console.log('Option ' + option + 'is not a possible admin option');
      }
  }


}
