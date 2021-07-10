import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Studio-Manager-v2';

  constructor(private router: Router) {
  }

  isLogin() {
    if(this.router.url === "/") {
      return true;
    }
    else {
      return false;
    }
  }
}
