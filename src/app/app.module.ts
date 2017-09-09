import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'
import { WeatherComponent } from './weather/weather.component';
import { HttpModule } from '@angular/http'
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from './weather-service.service';
import { FavoriteWeatherComponent } from './favorite-weather/favorite-weather.component';
import { RouterModule, Routes} from '@angular/router';



const apiRoutes: Routes = [
{
  path: 'favorite',
  component: FavoriteWeatherComponent
},
{
  path: 'search',
  component: WeatherSearchComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSearchComponent,
    WeatherDetailComponent,
    FavoriteWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(apiRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
