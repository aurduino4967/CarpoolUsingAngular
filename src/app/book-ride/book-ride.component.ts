import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { BookRide } from '../models/BookRide';
import { LogInComponent } from '../log-in/log-in.component';
import { Router } from '@angular/router';
import { range } from 'rxjs';
import { Output,EventEmitter } from '@angular/core';
import { RidehistoryComponent } from '../ridehistory/ridehistory.component';
import { registry } from '../service/ridesregistry.service';
@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class BookRideComponent {
  @Output() event1=new EventEmitter<BookRide>();
  logoimg_src="../assets/logo.png";
  timeslots=["5am-9am","9am-12pm","12pm-3pm","3pm-6pm","6pm-9pm"];
  time="";
  //when timing is set
  timing(time:string)
  {
    //for resetting the elements to default
    var timeslots = document.getElementsByClassName('time',) as HTMLCollectionOf<HTMLElement>;
    for(let i=0;i<timeslots.length;i++)
    {
        timeslots[i].style.backgroundColor="white";
        timeslots[i].style.color="black";
    }
    let selectedslot=document.getElementById(time) as HTMLButtonElement;
    selectedslot.style.backgroundColor="blueviolet";
    this.time=selectedslot.value;
    selectedslot.style.color="white";
  }

  bookTheRide(date:HTMLInputElement,from:HTMLInputElement,to:HTMLInputElement){
    var newRide=new BookRide();
    //for finding timeslot
    const timeslots = document.getElementsByClassName('time',) as HTMLCollectionOf<HTMLButtonElement>;
    for(let i=0;i<timeslots.length;i++)
    {
         if(timeslots[i].style.backgroundColor=="blueviolet"){
          newRide.time=timeslots[i].value;
        }
    }
    newRide.from=from.value;
    newRide.to=to.value;
    newRide.date=date.value.toString();
    registry.insertIntoBookedRides(LogInComponent.user,newRide);
    registry.transferBookedRideObj(newRide);
    alert("Ride Booked Successfully");
  }

}
