import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import 'rxjs/add/operator/switchMap';

@Component({
   moduleId: module.id,
   selector: 'my-app',
   templateUrl: '../app/app.component.html'
})
export class AppComponent implements OnInit {
   constructor(
      private AppService: AppService
   ){}
   flag : boolean = false;


   ngOnInit(): void{
      const code = window.location.href.split('code=').slice(1).toString();
      console.log(code);
      if(code){
         this.setFbAccessToken(code);
      }
   }

   logFbUser(): void{

      this.AppService.logFbUser();

   }

   setFbAccessToken(code : string) : void{
      this.AppService.setFbAccessToken(code).subscribe(res =>{

         console.log(res);

      },error => console.log("Error: ", error), () => {

         this.flag = true;
         this.displayInfos();

      });

   }

   displayInfos(): void{
      console.log(this.flag);
      //TODO : display data

   }


}
