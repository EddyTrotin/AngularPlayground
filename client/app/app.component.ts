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

   infos : any = null;

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
         if(res.status === 200){
            console.log("OK : token set in server application");
            this.getFbInfos();
         }
      }, error => console.log("Error: ", error))
   }

   getFbInfos(): void{

      this.AppService.getFbInfos().subscribe(infos => {
         this.infos = infos;

         console.log(this.infos);

         // console.log("Location : " + this.locationFb);
      })

   }


}
