/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRouteModule} from './app-route/app-route.module';

import {AppComponent} from './app.component';
/* beautify preserve:end */

@NgModule({
  imports: [
    BrowserModule,
    AppRouteModule,
    SharedModule,
    ReactiveFormsModule
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
