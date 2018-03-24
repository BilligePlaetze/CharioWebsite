import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { WorldComponent } from './components/world/world.component';


@NgModule({
  declarations: [
    AppComponent,
    WorldComponent
  ],
  imports: [
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
