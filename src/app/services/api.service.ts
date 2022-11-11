import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewRestaurantComponent } from '../view-restaurant/view-restaurant.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //property
  //create a obj (search) for class BehaviorSubject
  search= new BehaviorSubject('')

  //constructor
  //dependency injection should happen inside contructor of a class
  constructor(private api: HttpClient) { }
  //now HttpClient class is availble inside ApiService class, and by using api variable we can get everthing
  //in the HttpClient class

  //user defined function

  //to get all restaurant list api - http://localhost:3000/restaurants (api call is made to this url)
  getRestaurantList() {
    //use http request get - make api call to  http://localhost:3000/restaurants 
    //get() method is in HttpClient class, and this class is in HttpClientModule library
    //we should get HttpClient class inside ApiService class, then only get() method can be used
    //use this. to get all fn and var in the class
    return this.api.get('http://localhost:3000/restaurants')
  }

  //get a sigle restaurant detail from api 
  ViewRestaurant(restId: number) {
    return this.api.get('http://localhost:3000/restaurants/' + restId)
  }

  //to add new restaurant details to api
  addRestaurant(newRestaurant: any) {
    return this.api.post('http://localhost:3000/restaurants', newRestaurant)
  }

  //to update particular restaurant
  updateRestaurant(restId: any, updatedRestBody: any) {
    return this.api.patch('http://localhost:3000/restaurants/' + restId, updatedRestBody)
  }

  //to delete particular restaurant
  deleteRestaurant(restId: any) {
    return this.api.delete('http://localhost:3000/restaurants/' + restId)
  }

}
