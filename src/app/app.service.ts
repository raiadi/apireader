import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread";




  constructor(private http: HttpClient) { }

      

  // getData(url:string):any{
  //   console.log(this.http.get(url));
  //   return this.http.get(url); 
  // }
  getData(url: string, httpHeaders: HttpHeaders, params: object){
    console.log("header: "+ httpHeaders)
    
    console.log(this.http.get(url));
    return this.http.get(url, {headers: httpHeaders}); 
  }
}
