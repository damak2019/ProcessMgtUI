import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodListComponent } from './components/method-list/method-list.component';
import { ProcessSearshingFormComponent } from './components/process-searshing-form/process-searshing-form.component';
import { ListProcessComponent } from './components/list-process/list-process.component';
import { AddMethodMappingComponent } from './components/add-method-mapping/add-method-mapping.component';
import { AddProceesComponent } from './components/add-procees/add-procees.component';
import { AddProcessActivityComponent } from './components/add-process-activity/add-process-activity.component';
import { AddArtifactComponent } from './components/add-artifact/add-artifact.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';


const routes: Routes = [
 { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
 { path: 'acceuil', component: AcceuilComponent },
 { path: 'methods', component: MethodListComponent },
 { path: 'searchForm', component: ProcessSearshingFormComponent },
 {path: 'addMethodMapping/:idMethod', component: AddMethodMappingComponent},
 {path: 'addProcess/:idMethod', component: AddProceesComponent},
 {path: 'addActivity/:idMethod/process/:idProcess', component: AddProcessActivityComponent},
 {path: 'addArtifact/:idMethod/process/:idProcess/activity/:idActivity', component: AddArtifactComponent},
 {path: 'method/:name/ptype/:ptype/pfollow/:pfollow', component: ListProcessComponent},

// { path: 'panier', component: CartDetailComponent },
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



