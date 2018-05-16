import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    apiUrl = 'http://washington.uww.edu/cs476/crowdfund/cf-api/';

    login(username: string, password: string){
        return this.http.post<any>(this.apiUrl + 'login/checkLogin', JSON.stringify({username: username, password: password})).map(response => {
            console.log(response);
            if (response.data.success) {
                localStorage.setItem('username', response.data.userinfo.first_name + ' ' + response.data.userinfo.last_name);
                //Store user_id using localStorage
                localStorage.setItem('user_id', response.data.userinfo.user_id);
                localStorage.setItem('admin', response.data.userinfo.admin);
                return true;
            }
            return false;});
    }

    // The logout method just clears the username value:
    logout(): any { localStorage.removeItem('username'); }

    // getUser returns the username or null
    getUser(): any { return localStorage.getItem('username'); }

    getAdmin(): any { return localStorage.getItem('admin'); }

    getUserId(){ return localStorage.getItem('user_id'); }

    // isLoggedIn uses getUser() to return true if we have a user
    isLoggedIn(): boolean { return this.getUser() !== null; }
}

// export an AUTH_PROVIDERS, so it can be injected into our app:
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
