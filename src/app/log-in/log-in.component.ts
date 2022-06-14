import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerServiceComponent } from '../customer-service/customer-service.component';
import { registry } from '../service/ridesregistry.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class LogInComponent {
  static user="";
  logIn(email:HTMLInputElement,password:HTMLInputElement,loginform:HTMLFormElement){
    if(!registry.carpoolUsers.userlist[email.value])
    {
      alert("invalid email \nplease Signup");
    }
    else if(registry.carpoolUsers.userlist[email.value]!=password.value)
    {
      alert("invalid password\nplease try again");
    }
    else{
      alert("logged in successfully");
      LogInComponent.user=email.value;
      let element=document.getElementById("services");
      let history=document.getElementById("history")
      if(element && history)
      {
        element.style.display="flex";
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        history.style.display="flex";
        history.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
      loginform.reset();
      
    }
  }

  viewSignUpForm(){
    let element=document.getElementById("signUpSection");
    let parent=document.getElementById("logInSection");
    if(element && parent)
    {
      element.style.display="flex";
      parent.style.display="none";
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
 
  togglePasswordVisibility(icon:HTMLElement,password:HTMLInputElement){
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the icon
    icon.classList.toggle("bi-eye");
  }
}
