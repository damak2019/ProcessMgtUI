import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MethodListComponent } from './components/method-list/method-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MethodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide : 'BACKEND_URL' , useValue : 'http://localhost:9090' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
