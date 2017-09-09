import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {



constructor(private http : Http) { }

//Get weather from  api
  getWeather(weather: string) {
  	return this.http.get('http://api.apixu.com/v1/forecast.json?key=2e3212ea081543c09a6130414170609&q='+weather+'&days=10')
  	.map(res =>
  		res.json() 		
  	);
  }

  //save data in database
  save(data){
     var expressApi='http://localhost:3001/admin'
     return this.http.post(expressApi,data)
     .map((res: Response)=>res.json())
 }

}
