import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getAllEvents(): any {
    return this.http.get(this.baseUrl + "api/event/GetEvent");
  }

//  addEvent(event: Event): any {
//    console.log(event);
//    const params = new HttpParams();
//    return this.http.post(
//      this.baseUrl + "api/event/GetEvent" + event.)
//  }
}
