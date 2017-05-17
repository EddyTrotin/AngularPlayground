import { Component, OnInit } from '@angular/core';
import { LinkedinService } from '../services/linkedin.service';
import 'rxjs/add/operator/switchMap';

@Component({
   moduleId: module.id,
   selector: 'linkedin',
   templateUrl: '../../app/views/linkedin.component.html'
})
export class LinkedinComponent{
   constructor(
      private LinkedinService: LinkedinService
   ){}

   infos : any = null;

   ngOnInit(): void{
      const user_code = window.location.href.split('code=').slice(1).toString();
      if(user_code){
         this.setLiAccessToken(user_code);
      }
   }

   logLiUser(): void{

      this.LinkedinService.logLiUser();

   }

   setLiAccessToken(user_code : string) : void{
      this.LinkedinService.setLiAccessToken(user_code).subscribe(res =>{
         if(res.status === 200){
            this.getLiInfos();
         }
      }, error => console.log("Error: ", error))
   }

   getLiInfos(): void{

      this.LinkedinService.getLiInfos().subscribe(infos => {
         this.infos = infos;
      })

   }

}
