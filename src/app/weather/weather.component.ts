import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherList;	

  public favoriteList;

  constructor() { }

  updateWeatherList(event){
  	this.weatherList=event;
    
  }


  showFavoriteList(event){
    this.favoriteList=event;
  }

  ngOnInit() {
  }

}
