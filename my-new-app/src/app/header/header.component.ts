import { Component } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private headerService: MyAppServiceService) {
  }

  name = {
    value: "Album"
  }

  onClick() {
    console.log("clicked!!!")
  }
}
