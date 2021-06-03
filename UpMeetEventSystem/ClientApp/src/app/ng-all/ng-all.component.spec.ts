/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NgAllComponent } from './ng-all.component';

let component: NgAllComponent;
let fixture: ComponentFixture<NgAllComponent>;

describe('NgAll component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NgAllComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NgAllComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});