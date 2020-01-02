import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MethodListComponent } from './components/method-list/method-list.component';
import { ProcessSearshFormComponent } from './process-searsh-form/process-searsh-form.component';
import { ProcessSearshingFormComponent } from './components/process-searshing-form/process-searshing-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListProcessComponent } from './components/list-process/list-process.component';

@NgModule({
  declarations: [
    AppComponent,
    MethodListComponent,
    ProcessSearshFormComponent,
    ProcessSearshingFormComponent,
    NavbarComponent,
    FooterComponent,
    ListProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : 'BACKEND_URL' , useValue : 'http://localhost:9090' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
