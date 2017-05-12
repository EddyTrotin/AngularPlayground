import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class FacebookService{


   constructor(private http:Http){
      console.log('App Service Initialized...');
   }

   api : string = "rainbowdata.api.facebook"

   logFbUser() : void{
       window.location.href = this.api + "/getFbCode";
   }

   setFbAccessToken(code : string){
      console.log("calling setFbAccessToken");
      return this.http.get(this.api + '/setFbAccessToken/' + code).map(res => res);

   }

   getFbInfos(){
      return this.http.get(this.api + '/getFbInfos').map(res => res.json());
   }

}
