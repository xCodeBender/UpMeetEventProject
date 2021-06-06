import { Component, EventEmitter, Output } from '@angular/core';
import { MyService } from '../event.service';
import { Favorite } from '../Favorite';

@Component({
    selector: 'app-ng-favorite',
    templateUrl: './ng-favorite.component.html',
    styleUrls: ['./ng-favorite.component.scss']
})
/** NgFavorite component*/
export class NgFavoriteComponent {

  //@Input() fav: Favorite = { id: -1, eventId: 0, firstName: "", loginId: 0 }
  @Output() createdFav = new EventEmitter<Favorite>();

    /** NgFavorite ctor */
  constructor(private service: MyService) {

  }

  addToFavorite(id: number) {
    let newFavorite: Favorite = {
      id: null,
      eventId: id,
      firstName: null,
      loginId: this.service.getID()

    }
    this.service.addFavorite.emit(newFavorite);

    /*return this.http.get(this.baseUrl + "api/event/AddFavorite=" + id);*/
  }
}
