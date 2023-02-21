import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'velumani';
//Pipes
  today=new Date();
  myCompanyName ="Gcl";
  myNumber=123456;
  myCurrency=45000;

//Directives
showUsers : boolean=true;

selectedUser: any; 
users=[
  {name:'vidhu',age:22},
  {name:'preethi',age:22},
  {name:'laa',age:23}
];}

//Form 
const profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    submit : new FormControl('')
  })
});

