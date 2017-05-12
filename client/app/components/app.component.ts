import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import { FacebookComponent } from './facebook.component';
import { FacebookService } from '../services/facebook.service';

@Component({
   moduleId: module.id,
   selector: 'my-app',
   templateUrl: '../../app/views/app.component.html'
})
export class AppComponent {

   http : Http;
   fbService : FacebookService = new FacebookService(this.http);
   fbComponent : FacebookComponent = new FacebookComponent(this.fbService);

   logFbUser(){
      console.log("ki");
      this.fbComponent.logFbUser();
   }

}
