import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from './services/app.service';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
