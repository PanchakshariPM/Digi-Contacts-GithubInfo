import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(public router: Router) { }

  ngOnInit() {
  }

  getErrorMessageForUserName() {
    return this.userName.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessageForPassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      '';
  }

  login() {
    if (this.userName.value == 'test' && this.password.value == 'test') {
      this.router.navigate(['/home/dashboard'])
    }
  }

}
