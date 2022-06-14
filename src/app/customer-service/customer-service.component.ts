import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class CustomerServiceComponent implements OnInit {
  logoimg_src="../assets/logo.png";
  user="";
  constructor() { 
  }
  ngOnInit(): void {
  }

  bookRide(){
    let bookride=document.getElementById("bookRide");
    if(bookride)
    {
        bookride.style.display="flex";
        bookride.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  offerRide(){
    let offerride=document.getElementById("offerRide");
    if(offerride)
    {
        offerride.style.display="flex";
        offerride.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
}
