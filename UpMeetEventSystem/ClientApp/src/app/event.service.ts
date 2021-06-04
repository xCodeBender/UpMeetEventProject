import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Event } from './Event';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getAllEvents(): any {
    return this.http.get(this.baseUrl + "api/event/GetEvent");
  }

  addEvent(newEvent: Event): any {
    console.log(newEvent);
    const params = new HttpParams();
    //console.log(this.baseUrl + "api/show/AddEvent");
    return this.http.post(
      this.baseUrl + "api/event/AddSEvent?name=" + "&price=" + newEvent.price + "&eventLocation" + newEvent.eventLocation + "&postTime" + newEvent.postTime,
      params
    ).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    )
      ;
  }
//  addEvent(event: Event): any {
//    console.log(event);
//    const params = new HttpParams();
//    return this.http.post(
//      this.baseUrl + "api/event/GetEvent" + event.)
//  }
}
