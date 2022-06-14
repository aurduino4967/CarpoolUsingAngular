import { Component, OnInit, Output,EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LogInComponent } from '../log-in/log-in.component';
import { registry } from '../service/ridesregistry.service';
import { OfferRide } from '../models/OfferedRide';

@Component({
  selector: 'app-offerride',
  templateUrl: './offerride.component.html',
  styleUrls: ['./offerride.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class OfferrideComponent{
  @Output() event2=new EventEmitter<OfferRide>();
  logoimg_src="../assets/logo.png";
  //when timing is set
  seats=['1','2','3'];
  timeslots=["5am-9am","9am-12pm","12pm-3pm","3pm-6pm","6pm-9pm"];

  timing(time:string)
  {
    //for resetting the elements to default
    var timeslots = document.getElementsByClassName('time',) as HTMLCollectionOf<HTMLElement>;
    for(let i=0;i<timeslots.length;i++)
    {
        timeslots[i].style.backgroundColor="white";
        timeslots[i].style.color="black";
    }
    let selectedslot=document.getElementById('offered'+time) as HTMLButtonElement;
    selectedslot.style.backgroundColor="blueviolet";
    selectedslot.style.color="white";
  }
  
  seatBooking(seat:string)
  {
    const timeslots = document.getElementsByClassName('seats',) as HTMLCollectionOf<HTMLElement>;
    for(let i=0;i<timeslots.length;i++)
    {
        timeslots[i].style.backgroundColor="white";
        timeslots[i].style.color="black";
    }
    let selectedseat=document.getElementById(seat) as HTMLButtonElement;
    selectedseat.style.backgroundColor="blueviolet";
    selectedseat.style.color="white";
  }

  offerRide(offerfrom:HTMLInputElement,offerto:HTMLInputElement,offerdate:HTMLInputElement){
    var newRide=new OfferRide();
    newRide.from=offerfrom.value;
    newRide.to=offerto.value;
    newRide.date=offerdate.value.toString();
    //for finding selectedseats
    const seatslots = document.getElementsByClassName('seats',) as HTMLCollectionOf<HTMLButtonElement>;
    for(let i=0;i<seatslots.length;i++)
    {
        if(seatslots[i].style.backgroundColor=="blueviolet"){
          newRide.seats=Number(seatslots[i].value);
        }
    }
    //for finding timeslots
    const timeslots = document.getElementsByClassName('time',) as HTMLCollectionOf<HTMLButtonElement>;
    for(let i=0;i<timeslots.length;i++)
    {
         if(timeslots[i].style.backgroundColor=="blueviolet"){
          newRide.time=timeslots[i].value;
        }
    }
    newRide.price=180;
    registry.insertIntoOfferedRides(LogInComponent.user,newRide);
    registry.transferOfferRideObj(newRide);
    alert("offered ride Successfully");
  }
}
