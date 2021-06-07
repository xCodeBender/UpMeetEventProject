import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../Event';

@Component({
    selector: 'app-ng-add',
    templateUrl: './ng-add.component.html',
    styleUrls: ['./ng-add.component.scss']
})
/** NgAdd component*/
export class NgAddComponent {
    /** NgAdd ctor */
  constructor(public router: Router) {

    }

  @Output() createdEvent = new EventEmitter<Event>();

  addEvent(form: NgForm): void {
    let newEvent: Event = {
      eventName: form.form.value.eventName,
      price: form.form.value.price,
      eventLocation: form.form.value.eventLocation,
      postTime: form.form.value.postTime,
      id: null
    }
    console.log(newEvent);
    this.createdEvent.emit(newEvent);
    form.resetForm();
    this.router.navigate(['NgAll']);
  }

  

}
