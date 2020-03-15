import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread";
  API_KEY; 



  constructor(private http: HttpClient) { }

      

  // getData(url:string):any{
  //   console.log(this.http.get(url));
  //   return this.http.get(url); 
  // }
  getData(url: string, header: object, params: object){
    let httpHeaders = new HttpHeaders(header);
    console.log(this.http.get(url));
    return this.http.get(url, {headers: httpHeaders}); 
  }
}
