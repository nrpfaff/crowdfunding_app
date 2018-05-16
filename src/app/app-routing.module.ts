import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { LoggedInGuard } from './logged-in.guard';

import { AccountHomeComponent } from './account-home/account-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageDataComponent } from './page-data/page-data.component';
import { PageDonateComponent } from './page-donate/page-donate.component';
import { PageStatusComponent } from './page-status/page-status.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'account-home', component: AccountHomeComponent, canActivate: [ LoggedInGuard ] },
    { path: 'admin-home', component: AdminHomeComponent, canActivate: [ LoggedInGuard ] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'page-create', component: PageCreateComponent, canActivate: [ LoggedInGuard ] },
    { path: 'page-data', component: PageDataComponent },
    { path: 'page-donate', component: PageDonateComponent, canActivate: [ LoggedInGuard ] },
    { path: 'page-status', component: PageStatusComponent, canActivate: [ LoggedInGuard ] },
    { path: 'search', component: SearchComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

