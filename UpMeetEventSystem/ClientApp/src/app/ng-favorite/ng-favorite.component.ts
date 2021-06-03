import { Component, Input } from '@angular/core';
import { Event } from '../Event';

@Component({
    selector: 'app-ng-favorite',
    templateUrl: './ng-favorite.component.html',
    styleUrls: ['./ng-favorite.component.scss']
})
/** NgFavorite component*/
export class NgFavoriteComponent {

  @Input() event: Event = {id: -1, eventName: "", price: 0, eventLocation: "", postTime: ""}

    /** NgFavorite ctor */
    constructor() {

    }
}
