import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  message: string = "Sarah's CV";
  name: string = "Sarah Williamson";
  address: string = "1234 Main St";
  phoneNumber: string = "123-456-1234";
  email: string = "email.gmail.com";
  displayWork: boolean = true;
  displayEdu: boolean = true;

  toggleWorkDisplay():void {
    if (this.displayWork) {
      this.displayWork = false;
    }
    else {
      this.displayWork = true;
    }
  }
}
