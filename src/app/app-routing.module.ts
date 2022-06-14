import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TemplateComponent } from './template/template.component';
import { LogInComponent } from './log-in/log-in.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { OfferrideComponent } from './offerride/offerride.component';
import { RidehistoryComponent } from './ridehistory/ridehistory.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [BrowserModule],
  exports: [RouterModule,SignUpComponent,RidehistoryComponent,TemplateComponent,LogInComponent,CustomerServiceComponent,BookRideComponent,OfferrideComponent],
  declarations: [
    SignUpComponent,
    TemplateComponent,
    LogInComponent,
    CustomerServiceComponent,
    BookRideComponent, 
    OfferrideComponent,
    RidehistoryComponent,
    
    ]
})
export class AppRoutingModule { 

}
