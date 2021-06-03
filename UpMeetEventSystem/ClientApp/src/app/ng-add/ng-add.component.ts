import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
/*import { NgAllComponent } from '../ng-all/ng-all.component';*/

@Component({
    selector: 'app-ng-add',
    templateUrl: './ng-add.component.html',
    styleUrls: ['./ng-add.component.scss']
})
/** NgAdd component*/
export class NgAddComponent {
    /** NgAdd ctor */
    constructor() {

    }

  @Output() createdEvent = new EventEmitter<NgAll>();

  addEvent(form: NgForm): void {
    let newShow: NgAll = {
      eventName: form.form.value.eventName,
      price: form.form.value.price,
      id: null
    }

    this.createdShow.emit(newShow);
  }
}
