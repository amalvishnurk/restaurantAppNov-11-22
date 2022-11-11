import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
//here the class name 'RestaurantsListComponent' is the component name
export class RestaurantsListComponent implements OnInit {
  //property
  restaurantList: any = [] //restaurantList is any type of data initialised with array (any is the type)
  restName="List of Restaurants"
  lDate:any
  searchTerm=''


  //we want getRestaurantList() method defined in the class ApiService here in this class RestaurantsListComponent
  //these two now become dependent, so we use dependency injection

  constructor(private apiService: ApiService) {
    this.lDate=new Date() //obj created for Date class, to get the date of your system
   }

  ngOnInit(): void {
    //apiService call to get all restaurant list
    this.apiService.getRestaurantList()
      //after api call, to resolve api fn call, observable concept is used
      //response will be in .subscribe()
      //inside subscribe() only call back fn can be given
      //the return of api call is assumed to be in the var result
      .subscribe((result) => {
        console.log(result); // array of 10 items can be seen in console
        //this result should be assigned to any variable in the class, then only it can be reused
        this.restaurantList=result
        console.log(this.restaurantList);
        
      })

      //to get search term from api service
      this.apiService.search.subscribe((data)=>{
        console.log(data);
        this.searchTerm=data
      })
  }


}
