import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookRide } from '../models/BookRide';
import { OfferRide } from '../models/OfferedRide';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class RidesregistryService {
  bookedRides: { [id: string] : BookRide[] } = {};
  offeredRides: { [id: string] : OfferRide[] } = {};
  carpoolUsers=new Users();
  bookedride=new Subject<BookRide>();
  offeredride=new Subject<OfferRide>();
  msg=new Subject<string>();

  transferBookedRideObj(ride:BookRide){
    this.bookedride.next(ride);
  }

  communicate(message:string)
  {
    this.msg.next(message);
  }

  transferOfferRideObj(ride:OfferRide){
    this.offeredride.next(ride);
  }

  createUserBook(id:string){
    this.bookedRides[id]=new Array<BookRide>();
    this.offeredRides[id]=new Array<OfferRide>();
  }

  insertIntoBookedRides(id:string,ride:BookRide)
  {
    this.bookedRides[id].push(ride);
  }

  insertIntoOfferedRides(id:string,ride:OfferRide)
  {
    this.offeredRides[id].push(ride);
  }

}
export var registry:RidesregistryService= new RidesregistryService();