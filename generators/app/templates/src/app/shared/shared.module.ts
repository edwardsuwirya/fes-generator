/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatAngkaDirective} from './directive/format-angka.directive';

import {TopHeaderComponent} from './component/top-header/top-header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {SidebarService} from "./service/sidebar.service";
/* beautify preserve:end */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // start_declarations
    FormatAngkaDirective,
    TopHeaderComponent,
    FooterComponent,
    SidebarComponent
    // end_declarations
  ],
  providers: [
    SidebarService
  ],
  exports: [
    // start_exports
    FormatAngkaDirective,
    TopHeaderComponent,
    FooterComponent,
    SidebarComponent
    // end_exports
  ]
})
export class SharedModule {
}
