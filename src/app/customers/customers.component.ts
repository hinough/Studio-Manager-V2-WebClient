import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  location: string;

  constructor(private router: Router) { 
    if(this.router.url === "/aktive") {
      this.location = "Aktive Kunder";
    }
    else if(this.router.url === "/fullforte") {
      this.location = "Fullførte kunder";
    }
    else {
      this.location = "";
    }
  }


  ngOnInit(): void {
  }

}
