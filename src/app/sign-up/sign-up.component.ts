import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LogInComponent } from '../log-in/log-in.component';
import { registry } from '../service/ridesregistry.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class SignUpComponent implements OnInit {
  backgroundimg="../../assets/signup_background.png";

  ngOnInit(): void {
    let element=document.getElementById("password");
    if(element)
    {
      element.innerHTML="<sup>hi</sup>";
    }
  }

  registerNewUser(email:HTMLInputElement,password:HTMLInputElement,confirmation:HTMLInputElement,signinform:HTMLFormElement){
      if(registry.carpoolUsers.userlist[email.value])
      {
        alert("already a registered user\nplease log in");
      }
      else if(email.checkValidity() && (password.value==confirmation.value))
      {
        registry.carpoolUsers.userlist[email.value]=password.value;
        alert("successfully created an account");
        registry.createUserBook(email.value);
        signinform.reset();
      }
      else
        alert("invalid credentials");
  }

  viewLogInForm(){
    let element=document.getElementById("logInSection");
    let parent=document.getElementById("signUpSection");
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
