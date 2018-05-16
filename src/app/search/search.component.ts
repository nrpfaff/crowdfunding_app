import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';
import { Category, Schedule } from '../myTypes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
    categories: Category[];
    selectedCategory: string;
    schedules: Schedule[];
    constructor(private apiService: HttpService, public authService: AuthService) {
        this.apiService.getCategoryList().subscribe(response => {
            console.log(response);
            if (response.status === 1) { this.categories = response.data; }
        });
    }

    displayCategorySchedule(){
        this.apiService.getCategorySchedule(this.selectedCategory).subscribe(response => {
            console.log(response);
            if (response.status === 1) {this.schedules = response.data;}
        });
    }

    /*
    addToCart(index){
        console.log(index);
        console.log(this.schedules[index]);
        const member_id = this.authService.getMemberId();
        console.log(member_id);
        console.log(this.schedules[index].id);
        this.apiService.addToMyCart(member_id, this.schedules[index].id).subscribe( response => {
            console.log(response);

        });
    }*/
}
