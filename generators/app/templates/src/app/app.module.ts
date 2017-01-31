/* beautify preserve:start */
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRouteModule} from './app-route/app-route.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
/* beautify preserve:end */

@NgModule({
  imports: [
    // start_imports
    BrowserModule,
    AppRouteModule,
    SharedModule,
    ReactiveFormsModule
    // end_imports
  ],
  declarations: [
    // start_declarations
    AppComponent,
    HomeComponent,
    LoginComponent
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
