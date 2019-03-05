import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RestService } from '../rest.service';
import { ContactStoreService } from '../contact-store.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: any[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];

  contactsData: any;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private contactStoreService: ContactStoreService,
    public router: Router
  ) { }

  ngOnInit() {

    this.restService.getContacts().subscribe(response => {
      console.log(response);
      if (response.status == 'success' && response.data.length > 0) {
        this.contactsData = response.data;
      }
    });
  }


  viewContact(data) {
    if (data != null)
      this.restService.viewContact(data).subscribe(response => {
        if (response.status == 'success') {
          this.contactStoreService._initializeContactDetailObject$.next(data);
          console.log(data, 'Clicked Contact from Dashboard comp');
          this.router.navigate(["/home/view-contact"]);
        }
      });
  }

}
