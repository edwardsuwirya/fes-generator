/* beautify preserve:start */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { <%= featureName %>Service } from './<%= lowerFeatureName %>.service';
import { <%= featureName %>ListComponent } from './list/<%= lowerFeatureName %>-list.component';
import { <%= featureName %>DetailComponent } from './detail/<%= lowerFeatureName %>-detail.component';

/* beautify preserve:end */

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: <%= featureName %>ListComponent
    },
    {
      path: 'detail',
      component: <%= featureName %>DetailComponent
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // start_declarations
    <%= featureName %>ListComponent,
    <%= featureName %>DetailComponent
    // end_declarations
  ],
  providers: [
    // start_providers
    <%= featureName %>Service
    // end_providers
  ],
  exports: [
    // start_exports
    // end_exports
  ]
})
export class <%= featureName %>Module { }
