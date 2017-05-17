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

   setLiAccessToken(user_code : string){
      return this.http.get( this.api + '/setLiAccessToken/' + user_code).map(res => res);

   }

   getLiInfos(){
      return this.http.get(this.api + '/getLiInfos').map(res => res.json());
   }

}
