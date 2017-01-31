/* beautify preserve:start */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= featureName %>Service } from './<%= featureFileName %>.service';
import { <%= featureName %>ListComponent } from './list/<%= featureFileName %>-list.component';
import { <%= featureName %>DetailComponent } from './detail/<%= featureFileName %>-detail.component';
import {ReactiveFormsModule} from '@angular/forms';

/* beautify preserve:end */


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
    <%= featureName %>ListComponent,
    <%= featureName %>DetailComponent
    // end_exports
  ]
})
export class <%= featureName %>Module { }
