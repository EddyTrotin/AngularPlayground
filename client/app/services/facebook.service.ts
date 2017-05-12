import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class FacebookService{


   constructor(private http:Http){
      console.log('App Service Initialized...');
   }

   logFbUser() : void{
       window.location.href = "rainbowdata.api.facebook/getFbCode";
   }

   setFbAccessToken(code : string){
      console.log("calling setFbAccessToken");
      return this.http.get('/rainbowdata.api.facebook/setFbAccessToken/' + code).map(res => res);

   }

   getFbInfos(){
      return this.http.get('/rainbowdata.api.facebook/getFbInfos').map(res => res.json());
   }

}
