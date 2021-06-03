/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NgAddComponent } from './ng-add.component';

let component: NgAddComponent;
let fixture: ComponentFixture<NgAddComponent>;

describe('NgAdd component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NgAddComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NgAddComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});