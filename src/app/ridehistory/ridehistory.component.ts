import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewEncapsulation,ɵɵrestoreView,Input,ChangeDetectionStrategy} from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { LogInComponent } from '../log-in/log-in.component';
import { BookRide } from '../models/BookRide';
import { OfferRide } from '../models/OfferedRide';
import { registry } from '../service/ridesregistry.service';

@Component({
  selector: 'app-ridehistory',
  templateUrl: './ridehistory.component.html',
  styleUrls: ['./ridehistory.component.css'],
})
export class RidehistoryComponent implements OnInit{

  @Input() bookedrides:BookRide[]=[];
  @Input() offeredrides:OfferRide[]=[];

  constructor(){
  }

  ngOnInit(): void {

    registry.bookedride.subscribe(ride=>{
      this.bookedrides=[...this.bookedrides,<BookRide>ride];
    });
    registry.offeredride.subscribe(ride=>{
      this.offeredrides=[...this.offeredrides,<OfferRide>ride];
    });

  }

}
