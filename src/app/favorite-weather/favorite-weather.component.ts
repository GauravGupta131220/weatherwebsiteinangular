import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service.service'

@Component({
  selector: 'app-favorite-weather',
  templateUrl: './favorite-weather.component.html',
  styleUrls: ['./favorite-weather.component.css']
})
export class FavoriteWeatherComponent implements OnInit {

	list:any = [];

  constructor(private weatherService:WeatherService) { } 

  ngOnInit() {

    this.weatherService.showFavList()
        .subscribe((data)=>{
          this.list=data;
        })
  }

}
