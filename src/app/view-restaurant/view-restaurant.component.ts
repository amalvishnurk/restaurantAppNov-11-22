import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

  restId: any;
  restDetails:any;
  //dependency injection for ActivatedRoute class
  constructor(private activatedRoute: ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result => {
      // console.log(result);
      this.restId = result['id']  //returned value is an object, we want only id value
    })

    this.apiservice.ViewRestaurant(this.restId)
    .subscribe(result=>{
      console.log(result);
      this.restDetails=result
      
    })

  }

 




}


