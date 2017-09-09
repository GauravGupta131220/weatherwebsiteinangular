import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'
import { WeatherComponent } from './weather/weather.component';
import { HttpModule } from '@angular/http'
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from './weather-service.service'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSearchComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
