import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { MyService } from '../event.service';
/*import { RouterModule, Routes } from '@angular/router';*/
import { ActivatedRoute, Router } from '@angular/router';
import { Favorite } from '../Favorite';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
/** eventDetails component*/
export class EventDetailsComponent implements OnInit  {

  event: Event = {
    id: -1,
    eventName: "",
    price: 0,
    eventLocation: "",
    postTime:""
  };
    /** eventDetails ctor */
  constructor(private myService: MyService, private route: ActivatedRoute, public router: Router)
  {

  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));
    console.log(id);

    this.event = this.myService.getEventFromId(id).subscribe(
      (response: any) => {
        this.event = response;
        console.log(this.event);

      }
    );
  }

  addFavorite(id: number) {
    this.myService.addFavorite(id);
    this.router.navigate(['NgAll']);

  }

  removeFavorite(id: number) {
    this.myService.removeFavorite(id);

  }


}
