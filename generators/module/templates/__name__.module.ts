/* beautify preserve:start */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
/* beautify preserve:end */

const routes: Routes = [{
  // path: '',
  // component: BerandaAkunComponent
  // , children: [
  //   {
  //     path: 'child-1',
  //     component: BukaAkunComponent
  //   },
  //   {
  //     path: 'child-2',
  //     component: TutupAkunComponent
  //   }
  // ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // start_declarations
    // end_declarations
  ],
  providers: [
    // start_providers
    // end_providers
  ],
  exports: [
    // start_exports
    // end_exports
  ]
})
export class <%= moduleName %>Module { }
