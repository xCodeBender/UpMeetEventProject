/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SetIdComponent } from './set-id.component';

let component: SetIdComponent;
let fixture: ComponentFixture<SetIdComponent>;

describe('setId component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SetIdComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SetIdComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});