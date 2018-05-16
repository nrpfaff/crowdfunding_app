import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
apiUrl = 'http://washington.uww.edu/cs476/crowdfund/cf-api/';
constructor(private http: HttpClient) { }

// define a method to fetch a list of categories
getCategoryList() { return this.http.get<any>( this.apiUrl + 'search/categoryList'); }

// define a method to fetch schedule for a given category
getCategorySchedule(selectedCategory: string) { return this.http.get<any>(this.apiUrl + 'search/getCategorySchedule/' + selectedCategory); }

addNewPage(page_id, title, description, funded_amount, funds_needed, category, date_created, date_end){
  return this.http.post<any>(this.apiUrl + 'pagecreate/addpage',
  JSON.stringify({page_id: page_id, title: title, description: description, funded_amount: funded_amount, funds_needed: funds_needed, category: category, date_created: date_created, date_end: date_end }));
}

/*getAccount(){
    return this.http.post<any>(this.apiUrl + 'account-home/getUser/');
}*/

userInfo(member: string){
    return this.http.get<any>(this.apiUrl + 'account/getAccount/' + member);
}

updateAccount(user_id, first_name, last_name, username, phone, email){
  return this.http.post<any>(this.apiUrl + 'account/getUserInfo',
    JSON.stringify({ user_id: user_id, first_name: first_name, last_name: last_name, username: username, phone: phone, email: email }));
}

getProjectInfo(member: string){
  return this.http.get<any>(this.apiUrl + 'account/getProjectInfo/' + member);
}

updateProject(page_id, title, description, funds_needed, category){
  return this.http.post<any>(this.apiUrl + 'account/updateProject',
   JSON.stringify({ page_id: page_id, title: title, description: description, funds_needed: funds_needed, category: category}));
}
getprojects(){
  return this.http.get<any>(this.apiUrl + 'pagecreate/getprojects');
}

pagestatus(page_id, owner_id, approved, processing){
  return this.http.post<any>(this.apiUrl + 'pagecreate/pagestatus',
  JSON.stringify({page_id: page_id, owner_id: owner_id, approved: approved, processing: processing}));
}
pendingproject(){
  return this.http.get<any>(this.apiUrl + 'account/pendingproject');
}
approve(page_id, owner_id, approved, processing){
  return this.http.post<any>(this.apiUrl + 'account/approve',
  JSON.stringify({page_id: page_id, owner_id: owner_id, approved: approved, processing: processing}));
}
deny(page_id){
  return this.http.post<any>(this.apiUrl + 'account/deny',
  JSON.stringify({page_id: page_id}));
}
deleteData(page_id){
  return this.http.post<any>(this.apiUrl + 'account/deleteData',
  JSON.stringify({page_id: page_id}));
}

trending(){
  return this.http.get<any>(this.apiUrl + 'home/trending');
}
/* sample method to pass selection info via post
addToMyCart(member_id, sid){
  return this.http.post<any>(this.apiUrl + 'subject/addToCart', JSON.stringify({ member_id: member_id, sid: sid }));
}
*/

}
