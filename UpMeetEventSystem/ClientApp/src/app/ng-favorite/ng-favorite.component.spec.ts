/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NgFavoriteComponent } from './ng-favorite.component';

let component: NgFavoriteComponent;
let fixture: ComponentFixture<NgFavoriteComponent>;

describe('NgFavorite component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NgFavoriteComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NgFavoriteComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});