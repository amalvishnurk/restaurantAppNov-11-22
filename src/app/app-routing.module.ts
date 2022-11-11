import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';

const routes: Routes = [
  //defining path for each components
  //RestaurantsListComponent , path: localhost:4200
  //import component here by clicking blue bulb
  {
    path: '', component: RestaurantsListComponent //path is url localhost4200 ie this page is home page, so path set as empty string
  },
  //ViewRestaurantComponent ,  path: localhost:4200/view-restaurant
  //name of component is the class name of that component
  {
    path: 'view-restaurant/:id', component: ViewRestaurantComponent
    //copy and paste path in localhost4200/path to see that page
    //set view of a particular restaurant, so id no. have to attach along with url
    //id should be given as parameter of url, thing after : will be considered as parameter by url
  },
  //AddRestaurantComponent,  path: localhost:4200/add-restaurant
  {
    path: 'add-restaurant', component: AddRestaurantComponent
  },
  //UpdateRestaurantComponent, path: localhost:4200/update-restaurant
  {
    path: 'update-restaurant/:id', component: UpdateRestaurantComponent
  },
  //DeleteRestaurantComponent, path: localhost:4200/delete-restaurant
  {
    path: 'delete-restaurant/:id', component: DeleteRestaurantComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
