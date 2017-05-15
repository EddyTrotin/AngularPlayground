import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class LinkedinService{

   constructor(private http:Http){
   }

   api : string = "rainbowdata.api.linkedin";

   logLiUser() : void{
      window.location.href = this.api + "/getLiCode";
   }

   setLiAccessToken(code : string){
      console.log("calling setLiAccessToken");
      return this.http.get( this.api + '/setLiAccessToken/' + code).map(res => res);

   }

   getLiInfos(){
      console.log("dafuk");
      return this.http.get(this.api + '/getLiInfos').map(res => res.json());
   }

}
