/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {PageNotFoundComponent} from '../shared/component/page-not-found/page-not-found.component';
/* beautify preserve:end */

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,children:[
    // start_children
    //  {path: 'nasabah/list', component: NasabahListComponent},
    //  {path: 'nasabah/detail', component: NasabahDetailComponent}
    // end_children
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    // start_declarations
    // end_declarations
  ],
  exports: [RouterModule]
})
export class AppRouteModule {
}

