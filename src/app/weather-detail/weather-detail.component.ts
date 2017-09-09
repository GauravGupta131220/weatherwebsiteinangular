import { Component, OnInit,Input } from '@angular/core';
import { WeatherService } from '../weather-service.service'

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {


  @Input('weatherList') weatherList:any;

  // @Input('favoriteList') favoriteList:any;

 
  constructor(private weatherService:WeatherService) { }

  data: any={};



  //method to save data in database
  saveData(weather){

  	this.data={

  		"city":weather.name,
	    "date":weather.date,
	    "maxtemp":weather.day.maxtemp_c,
	    "mintemp":weather.day.mintemp_c
  	};

  	this.weatherService.save(this.data).subscribe((data:any)=>{
  		console.log(data);
  	})
  } 

  ngOnInit() {
  }

}
