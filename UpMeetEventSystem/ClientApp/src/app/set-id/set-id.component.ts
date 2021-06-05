import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyService } from '../event.service';

@Component({
    selector: 'app-set-id',
    templateUrl: './set-id.component.html',
    styleUrls: ['./set-id.component.scss']
})
/** setId component*/
export class SetIdComponent {
  /** setId ctor */
  constructor(private service: MyService) {

  }

  myId: number = -1;

  getId(): void {
    this.myId = this.service.getId();
  }

  setId(form: NgForm): void {
    this.service.setId(form.form.value.user);
    this.getId();
  }

  
  
  
}
