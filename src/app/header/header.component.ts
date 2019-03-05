import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { ContactStoreService } from '../contact-store.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);

  createContactRequest: any = {
    name: '',
    email: '',
    phone: '',
    gender: ''
  };

  constructor(
    private restService: RestService,
    private contactStoreService: ContactStoreService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  getErrorMessageForName() {
    return this.name.hasError('required') ? 'You must enter a value' :
      this.name.hasError('name') ? 'Not a valid name' :
        '';
  }

  getErrorMessageForEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageForPhone() {
    return this.phone.hasError('required') ? 'You must enter a value' :
      this.phone.hasError('phone') ? 'Not a valid phone no.' :
        '';
  }

  getErrorMessageForGender() {
    return this.gender.hasError('required') ? 'You must enter a value' :
      this.gender.hasError('gender') ? 'Not a valid gender' :
        '';
  }

  createContact() {
    this.restService.createContact(this.createContactRequest).subscribe(e => {
      this.contactStoreService._initializeContactDetailObject$.next(e);
      console.log(e, '--------');
      this.createContactRequest = {
        name: '',
        email: '',
        phone: '',
        gender: ''
      };
    });
  }

  clearInputs() {
    this.createContactRequest = {
      name: '',
      email: '',
      phone: '',
      gender: ''
    };
  }

}
