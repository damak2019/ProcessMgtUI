import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MethodListComponent } from './components/method-list/method-list.component';
import { ProcessSearshFormComponent } from './process-searsh-form/process-searsh-form.component';
import { ProcessSearshingFormComponent } from './components/process-searshing-form/process-searshing-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListProcessComponent } from './components/list-process/list-process.component';
import { AddMethodMappingComponent } from './components/add-method-mapping/add-method-mapping.component';
import { AddProceesComponent } from './components/add-procees/add-procees.component';
import { AddProcessActivityComponent } from './components/add-process-activity/add-process-activity.component';
import { AddArtifactComponent } from './components/add-artifact/add-artifact.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AddMethodComponentComponent } from './components/add-method-component/add-method-component.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    MethodListComponent,
    ProcessSearshFormComponent,
    ProcessSearshingFormComponent,
    NavbarComponent,
    FooterComponent,
    ListProcessComponent,
    AddMethodMappingComponent,
    AddProceesComponent,
    AddProcessActivityComponent,
    AddArtifactComponent,
    AcceuilComponent,
    AddMethodComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule
  ],
  providers: [
    {provide : 'BACKEND_URL' , useValue : 'http://localhost:9090' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
