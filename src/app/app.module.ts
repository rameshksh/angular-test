import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_MAIN_ROUTES } from './app.route.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_MAIN_ROUTES)
  ],
  providers: [{
    provide: UserService, useClass: UserService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
