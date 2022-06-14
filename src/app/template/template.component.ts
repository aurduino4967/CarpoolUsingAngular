import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  logoimg_src="../assets/logo.png";
  image_src="../assets/conceptimage.png";

  constructor() { }

  ngOnInit(): void {
  }

}
