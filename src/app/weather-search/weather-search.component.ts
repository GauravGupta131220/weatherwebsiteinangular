import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { WeatherService } from '../weather-service.service'
 
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  public weathers: any;

  // list:any = [];

  @Output() weatherList = new EventEmitter<any>();

  // @Output() favoriteList = new EventEmitter<any>();

  constructor(private weatherService:WeatherService) { }

  searchWeather(weather: string){

  		this.weatherService.getWeather(weather)
          .subscribe(res=>{
      			this.weathers=res;
            // console.log(this.weather)
      			this.weatherList.emit(this.weathers);
  		})
  }

   ngOnInit() {

      this.weatherService.getWeather('Delhi')
          .subscribe(res=>{
            this.weathers=res;
            // console.log(this.weather)
            this.weatherList.emit(this.weathers);
      })

  }

  // //show favorite list
  // favoriteWeather(){
  //     this.weatherService.showFavList()
  //       .subscribe((data)=>{
  //         this.list=data;
  //         this.favoriteList.emit(this.list);
  //       })
  // }

}
