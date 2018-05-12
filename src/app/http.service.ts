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

addNewPage(title, description, fundedAmount, fundsNeeded, category){
  return this.http.post<any>(this.apiUrl + 'pagecreate/addpage',
  JSON.stringify({ title: title, description: description, fundedAmount: fundedAmount, fundsNeeded: fundsNeeded, category: category }));
}

/*getAccount(){
    return this.http.post<any>(this.apiUrl + 'account-home/getUser/');
}*/

updateUserInfo(user_id){
    return this.http.post<any>(this.apiUrl + 'account/updateUserInfo',
  JSON.stringify({ userid: user_id }));
}


/* sample method to pass selection info via post
addToMyCart(member_id, sid){
  return this.http.post<any>(this.apiUrl + 'subject/addToCart', JSON.stringify({ member_id: member_id, sid: sid }));
}
*/

}

