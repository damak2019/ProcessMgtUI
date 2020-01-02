import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodListComponent } from './components/method-list/method-list.component';
import { ProcessSearshingFormComponent } from './components/process-searshing-form/process-searshing-form.component';
import { ListProcessComponent } from './components/list-process/list-process.component';


const routes: Routes = [
 { path: '', redirectTo: 'methods', pathMatch: 'full' },
 { path: 'methods', component: MethodListComponent },
 { path: 'searchForm', component: ProcessSearshingFormComponent },
 {path: 'method/:name/ptype/:ptype/pfollow/:pfollow', component: ListProcessComponent},
// { path: 'panier', component: CartDetailComponent },
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



