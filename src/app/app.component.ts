import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  title = 'apireader';
  allData: Observable<any[]>;
  
  Key1: string = "x-rapidapi-host";
  Value1: string = "investors-exchange-iex-trading.p.rapidapi.com";
  Key2: string = "x-rapidapi-key";
  Value2: string = "121aa41317msh185b3ed2a2abf01p183d0fjsn20e9ed1e51af";
  Key3: string;
  Value3: string;
  Key4: string;
  Value4: string;

  keysArr;
  keysArr2;


  public apiUrl: string = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread";
  header: object = {};

  
  params = {};
  constructor(private appService: AppService) { }

  displayKeys = [];

  //Retreive data
  getInfo() { 
    //Populate header
    // this.header [this.Key1] = this.Value1;
    // this.header [this.Key2] = this.Value2;


    //
    let httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    // let httpHeaders = new HttpHeaders(header);
    httpHeaders = httpHeaders.append(this.Key1 , this.Value1);
    httpHeaders = httpHeaders.append(this.Key2, this.Value2);

    this.appService.getData(this.apiUrl, httpHeaders, this.params ).subscribe(
      (data: any) => this.allData = data
    );
    // if(this.allData instanceof Object){
    //   console.log("data is object")
    // }
    // if(this.allData instanceof Array){
    //   console.log("data is ")
    // }
    // Get keys
    //this.keysArr = Object.keys(this.allData);
    console.log("allData "+JSON.stringify(this.allData));
    this.keysArr2 = Object.keys(this.allData[0]);
    this.allData.forEach(function(data){
       this.keysArr = Object.keys(data);
      
    });

    //For each block check if key value is not object
    // console.log(this.allData);
    // this.allData.forEach(data =>{
    //   let tempKeys: any[] = [];
    //   tempKeys = Object.keys(data);
    //   console.log("Incoming data");
    //   console.log(tempKeys);
    // })
    //if key value non-object then add to display list with bread crumb
    //if object then check if each key value is not object
    //do until all key value is non-object
    
   }
}


/*
	"x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
	"x-rapidapi-key": "121aa41317msh185b3ed2a2abf01p183d0fjsn20e9ed1e51af"
*/