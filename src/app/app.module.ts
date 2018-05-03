import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AUTH_PROVIDERS } from './auth.service';
import { AuthService } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { MessageComponent } from './message/message.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageDataComponent } from './page-data/page-data.component';
import { PageDonateComponent } from './page-donate/page-donate.component';
import { PageStatusComponent } from './page-status/page-status.component';

import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    AccountHomeComponent,
    AdminHomeComponent,
    MessageComponent,
    PageCreateComponent,
    PageDataComponent,
    PageDonateComponent,
    PageStatusComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatSelectModule,
    MatSliderModule,
    MatGridListModule,
    MatDividerModule
  ],
  entryComponents: [MessageComponent],
  providers: [AuthService, LoggedInGuard, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
