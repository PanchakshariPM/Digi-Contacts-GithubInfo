import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ContactStoreService } from '../contact-store.service';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  panelOpenState = false;

  public contactDetails;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private contactStoreService: ContactStoreService
  ) {
    this.contactStoreService._initializeContactDetailObject.subscribe((contactInfo: any) => {
      
      if (contactInfo != undefined && contactInfo != "") {
        this.contactDetails = [contactInfo];
        console.log(this.contactDetails, 'ContactInfo of clicked contact, displaying from view-contact comp');
      }
    });
  }

  ngOnInit() { }

}
