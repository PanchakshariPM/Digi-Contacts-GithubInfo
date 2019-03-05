import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactStoreService {

  public _initializeContactDetailObject$: BehaviorSubject<any> = new BehaviorSubject<any>("");
  public _initializeContactDetailObject = this._initializeContactDetailObject$.asObservable(); // asObservable declarations for listening to the BehaviorSubject Property

  constructor() {
  }

}
