import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NgAllComponent } from './ng-all/ng-all.component';
import { NgFavoriteComponent } from './ng-favorite/ng-favorite.component';
import { NgAddComponent } from './ng-add/ng-add.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SetIdComponent } from './set-id/set-id.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NgAllComponent,
    NgFavoriteComponent,
    NgAddComponent,
    EventDetailsComponent,
    SetIdComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SetIdComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'NgAll', component: NgAllComponent },
      { path: 'NgFavorite', component: NgFavoriteComponent },
      { path: 'NgAdd', component: NgAddComponent },
      { path: 'event/:id', component: EventDetailsComponent },
      { path: 'event/:set', component: SetIdComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
