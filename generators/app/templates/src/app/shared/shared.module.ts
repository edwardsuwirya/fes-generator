/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatAngkaDirective} from './directive/format-angka.directive';

import {TopHeaderComponent} from './component/top-header/top-header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {SidebarItemComponent} from './component/sidebar-item/sidebar-item.component';
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
    SidebarComponent,
    SidebarItemComponent
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
    SidebarComponent,
    SidebarItemComponent
    // end_exports
  ]
})
export class SharedModule {
}
