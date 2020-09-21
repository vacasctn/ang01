import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  //router 
  // angular.givemerouter 
  // dependency injection 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    //console.log(this.username); 
    if(this.username==="waqas" && this.password==='dummy'){
      this.invalidLogin = false
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
  }

}
