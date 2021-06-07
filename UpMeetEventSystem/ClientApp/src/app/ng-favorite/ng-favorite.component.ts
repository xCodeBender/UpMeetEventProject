import { Component} from '@angular/core';
import { MyService } from '../event.service';
import { Favorite } from '../Favorite';
import { Event } from '../event';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ng-favorite',
    templateUrl: './ng-favorite.component.html',
    styleUrls: ['./ng-favorite.component.scss']
})
/** NgFavorite component*/
export class NgFavoriteComponent {


    /** NgFavorite ctor */
  constructor(private service: MyService, public router: Router ) {

  }

  ngOnInit() {
    this.service.getAllEvents().subscribe(
      (response: any) => {
        this.allEvents = response;
        console.log(this.allEvents);

        this.service.getAllFavorites().subscribe(
          (response: any) => {
            this.favList = response;
            console.log(this.favList);

            this.favList.forEach((f: Favorite) => {
              if (f.loginId == this.service.getID())
              { this.favEvents.push(this.allEvents.find((e: Event) => e.id == f.eventId)); }
            })
            console.log(this.favEvents);
          }
        )
      }

    )
    
  }

  favList: Favorite[] = [];
  allEvents: Event[] = [];
  favEvents: Event[] = [];


  addFavorite(id: number) {
    this.service.addFavorite(id);

  }

  removeFavorite(id: number) {
    this.service.removeFavorite(id);
    this.router.navigate(['NgFavorite']);
  }
}
