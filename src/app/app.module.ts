import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorldComponent } from './components/world/world.component';
import { CharityComponent } from './components/charity/charity.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { DataService } from './data.service';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  { path: 'charity', component: CharityComponent },
  { path: 'world',      component: WorldComponent },
  { path: '',      component: WorldComponent },
  { path: 'tracking', component: TrackingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    CharityComponent,
    TrackingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5sO9SQiJJe8wEAI41Q35vPmlrKtlCxfU'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
