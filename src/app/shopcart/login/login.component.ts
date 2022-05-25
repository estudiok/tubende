import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selectedValue :string = 'c';
  constructor() { }

  ngOnInit(): void {

  }

  funcion ():void {
    console.log("hola md");
  }

}
