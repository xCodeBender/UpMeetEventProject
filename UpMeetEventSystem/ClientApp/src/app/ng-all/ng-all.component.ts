import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../Event';
import { MyService } from '../event.service';


@Component({
    selector: 'app-ng-all',
    templateUrl: './ng-all.component.html',
    styleUrls: ['./ng-all.component.scss']
})
/** NgAll component*/
export class NgAllComponent {
  /** NgAll ctor */

  event: Event[] = [];

  constructor(private service: MyService, public router: Router) {

  }

  ngOnInit() {
    this.getEvents();
  }
  /*this.event.push(newEvent);//adding manually*/
  getEvents() {
    this.service.getAllEvents().subscribe(
      (response: any) => {
        this.event = response;
        console.log(this.event);

      }
    )
  }

  createEvent(newEvent: Event): void {
    console.log(newEvent);
    this.service.addEvent(newEvent).subscribe(data => {
      console.log(data);
      this.getEvents();
    },
      error => {
        console.log(error);
      }
    );
    
    this.router.navigate(['NgAll']);
  }

 
  
}
