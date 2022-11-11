import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  id: any;
  neighborhood: any;
  photograph: any;
  Monday: any;
  Tuesday: any;
  Wednesday: any;
  Thursday: any;
  Friday: any;
  Saturday: any;
  Sunday: any;
  rname: any;
  Address: any;
  cuisine: any;
  rvName: any;
  Date: any;
  Rating: any;
  Comments: any;
  lat: any;
  lng: any;

  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  addProduct() {

    let newRestaurant = {
      id: this.id,
      name: this.rname,
      neighborhood: this.neighborhood,
      photograph: this.photograph,
      address: this.Address,
      latlng: { lat: this.lat, lng: this.lng },
      cuisine_type: this.cuisine,
      operating_hours: {
        Monday: this.Monday,
        Tuesday:this.Tuesday,
        Wednesday:this.Wednesday,
        Thursday:this.Thursday,
        Friday:this.Friday,
        Saturday:this.Saturday,
        Sunday:this.Sunday
      },
      reviews:[
        {
          name:this.rvName,
          date:this.Date,
          rating:this.Rating,
          comments:this.Comments
        }
      ]

    }

    console.log(newRestaurant);
    this.apiservice.addRestaurant(newRestaurant)
    .subscribe(()=>{
      alert('Restaurant details addedd successfully!!')
      //to navigate btw pages
      this.router.navigateByUrl('') //path of restaurant list is empty string
    })
    
  }

  // changeId(event:any){
  //   console.log(event.target.value);

  // }

}
