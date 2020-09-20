import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Add user name' 
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    //console.log(this.username); 
    if(this.username==="waqas" && this.password==='dummy'){
      this.invalidLogin = false

    } else {
      this.invalidLogin = true
    }
  }

}
