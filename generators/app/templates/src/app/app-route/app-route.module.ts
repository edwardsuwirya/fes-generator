/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
/* beautify preserve:end */

const appRoutes: Routes = [
  // {path: 'lazy', loadChildren: '../module/my-module.module#MyModuleModule'},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent}
  // { path: '**', component: yourComponentName }
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

