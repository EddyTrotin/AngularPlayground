import { Component } from '@angular/core';

import { AppService } from './services/app.service';
import 'rxjs/add/operator/switchMap';

@Component({
   moduleId: module.id,
    selector: 'my-app',
    templateUrl: '../app/app.component.html',
    providers: [AppService]
})
export class AppComponent {

   constructor(
      private AppService: AppService
   ){}

   logFbUser(): void{

      console.log("test button");
      window.location.href = "api/auth/facebook";

   }

}
