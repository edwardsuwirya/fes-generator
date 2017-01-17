/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {AppRouteModule} from './app-route/app-route.module';

import {AppComponent} from './app.component';
/* beautify preserve:end */

@NgModule({
  imports: [
    BrowserModule,
    AppRouteModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    // start_declarations
    AppComponent,
    // end_declarations
  ],
  providers: [
    // start_providers
    // end_providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
