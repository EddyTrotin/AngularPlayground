import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import { FacebookComponent } from './facebook.component';
import { FacebookService } from '../services/facebook.service';
import { LinkedinComponent } from './linkedin.component';
import { LinkedinService } from '../services/linkedin.service';

@Component({
   moduleId: module.id,
   selector: 'my-app',
   templateUrl: '../../app/views/app.component.html'
})

export class AppComponent {

   http : Http;
   fbService : FacebookService = new FacebookService(this.http);
   fbComponent : FacebookComponent = new FacebookComponent(this.fbService);

   liService : LinkedinService = new LinkedinService(this.http);
   liComponent : LinkedinComponent = new LinkedinComponent(this.liService);

   confirmFlag : boolean = false;
   authorizeIsActive :boolean = false;


   logFbUser(){
      this.fbComponent.logFbUser();
   }


   logLiUser(){
      this.liComponent.logLiUser();
   }

   displayConfirmation(){
      if(this.authorizeIsActive){
         this.confirmFlag = true;
      }

   }

}
