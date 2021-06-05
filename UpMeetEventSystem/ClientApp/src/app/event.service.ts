import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Event } from './Event';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  event: Event = {
    id: -1,
    eventName: "",
    price: 0,
    eventLocation: "",
    postTime: ""
  };

  getAllEvents(): any {
    return this.http.get(this.baseUrl + "api/event/GetEvent");
  }

  addEvent(newEvent: Event): any {
    console.log(newEvent);
    const params = new HttpParams();
    //console.log(this.baseUrl + "api/show/AddEvent");
    return this.http.post(
      this.baseUrl + "api/event/AddEvent?eventName=" + newEvent.eventName + "&price=" + newEvent.price + "&eventLocation=" + newEvent.eventLocation + "&postTime=" + newEvent.postTime,
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

  getEventFromId(id: number): any {
    let result: Event = { id: -1, eventName: "", price: 0, eventLocation: "", postTime: "" };

    return this.http.get(this.baseUrl + "api/event/id?id=" + id);
    
    

  }

  currentId: number = -1;

  setId(newId: number): void {
    this.currentId = newId;

  }

  getId(): number {
    return this.currentId;
  }

  
}
