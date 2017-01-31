/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatAngkaDirective} from './directive/format-angka.directive';

import {TopHeaderComponent} from './component/top-header/top-header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {SidebarItemComponent} from './component/sidebar-item/sidebar-item.component';
import {SidebarService} from './service/sidebar.service';

import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {PageErrorComponent} from './component/page-error/page-error.component';
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
    SidebarItemComponent,
    PageNotFoundComponent,
    PageErrorComponent
    // end_declarations
  ],
  providers: [
    // start_providers
    SidebarService,
    // end_providers
  ],
  exports: [
    // start_exports
    FormatAngkaDirective,
    TopHeaderComponent,
    FooterComponent,
    SidebarComponent,
    SidebarItemComponent,
    PageNotFoundComponent,
    PageErrorComponent
    // end_exports
  ]
})
export class SharedModule {
}
