import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import 'rxjs/add/operator/switchMap';

@Component({
   moduleId: module.id,
   selector: 'facebook',
   templateUrl: '../../app/views/facebook.component.html'
})
export class FacebookComponent implements OnInit {
   constructor(
      private FacebookService: FacebookService
   ){}

   infos : any = null;

   ngOnInit(): void{
      const code = window.location.href.split('code=').slice(1).toString();
      if(code){
         this.setFbAccessToken(code);
      }
   }

   logFbUser(): void{
      this.FacebookService.logFbUser();
   }

   setFbAccessToken(code : string) : void{
      this.FacebookService.setFbAccessToken(code).subscribe(res =>{
         if(res.status === 200){
            this.getFbInfos();
         }
      }, error => console.log("Error: ", error))
   }

   getFbInfos(): void{

      this.FacebookService.getFbInfos().subscribe(infos => {
         this.infos = infos;
      })

   }


}
