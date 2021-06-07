import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from '../event.service';
import { Favorite } from '../Favorite';

@Component({
  selector: 'app-set-id',
  templateUrl: './set-id.component.html',
  styleUrls: ['./set-id.component.scss']
})
/** setId component*/
export class SetIdComponent {
  /** setId ctor */
  constructor(private service: MyService, public router: Router) {

  }

  @Output() createdFavorite = new EventEmitter<Favorite>();

  myId: number = -1;

  getId(): void {
    this.myId = this.service.getID();
  }

  setId(form: NgForm): void {
    this.service.setID(form.form.value.user);
    this.service.setName(form.form.value.FirstName);
    this.getId();
    this.router.navigate(['NgAll']);
  }


 
 
  
  
}
