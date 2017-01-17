/* beautify preserve:start */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* beautify preserve:end */

const appRoutes: Routes = [
  // { path: '**', component: yourComponentName }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    // start_declarations
    // end_declarations
  ]
})
export class AppRouteModule { }

