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



}
