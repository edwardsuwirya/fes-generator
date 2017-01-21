/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatAngkaDirective} from './directive/format-angka.directive';
/* beautify preserve:end */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // start_declarations
    FormatAngkaDirective
    // end_declarations
  ],
  providers: [],
  exports: [
    // start_exports
    FormatAngkaDirective
    // end_exports
  ]
})
export class SharedModule {
}
