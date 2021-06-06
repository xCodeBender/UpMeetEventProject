import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Event } from './Event';
import { Favorite } from './Favorite';


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

  fav: Favorite = {
    id: -1,
    loginId: 0,
    firstName: "",
    eventId: 0

  }

  getAllEvents(): any {
    return this.http.get(this.baseUrl + "api/event/GetEvent");
  }

  getAllFavorites(): any {
    return this.http.get(this.baseUrl + "api/event/AllFavorites");
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

  setID(newId: number): void {
    this.currentId = newId;

  }

  getID(): number {
    return this.currentId;
  }

  addFavorite(id: number) {
    let newFavorite: Favorite = {
      id: null,
      eventId: id,
      firstName: this.currentName,
      loginId: this.currentId

    };
    const params = new HttpParams();
    return this.http.post(this.baseUrl + "api/event/AddFavorite?loginId=" + newFavorite.loginId + "&FirstName=" + newFavorite.firstName + "&eventId=" + newFavorite.eventId, params)
      .subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        }
      );
      
  }

  currentName: string = "";

  setName(newName: string): void {
    this.currentName = newName;

  }

  getName(): string {
    return this.currentName;
  }

  removeFavorite(eventId: number) {
    return this.http.delete(this.baseUrl + "api/event/DeleteFavorite?eventId=" + eventId + "&LoginId=" + this.currentId).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
  }

}
