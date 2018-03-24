import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorldComponent } from './components/world/world.component';
import { CharityComponent } from './components/charity/charity.component';

const appRoutes: Routes = [
  { path: 'charity', component: CharityComponent },
  { path: 'world',      component: WorldComponent },
  { path: '',      component: WorldComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    CharityComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    BrowserModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: '...'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
