import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restId: any
  restDetails: any

  constructor(private router: ActivatedRoute, private apiservice: ApiService,
    private routers: Router) { }

  ngOnInit(): void {
    //get rest id to be updated
    this.router.params.subscribe((result) => {
      this.restId = result['id']
    })
    //fetch rest details of particular id 
    this.apiservice.ViewRestaurant(this.restId)
      .subscribe((result) => {

        this.restDetails = result

      })

  }
  updateRestaurantDetails(form: any) {
    console.log('form:',form.value); //form.value is an object with name of input tag as key and value as
    //input details
    let updateRest = {
      id: form.value.id,  //word after dot is the name of that input tag
      name: form.value.rname,
      neighborhood: form.value.neighborhood,
      photograph: form.value.photograph,
      address: form.value.Address,
      latlng: { lat: form.value.lat, lng: form.value.lng },
      cuisine_type: form.value.cuisine,
      operating_hours: {
        Monday: form.value.Monday,
        Tuesday: form.value.Tuesday,
        Wednesday: form.value.Wednesday,
        Thursday: form.value.Thursday,
        Friday: form.value.Friday,
        Saturday: form.value.Saturday,
        Sunday: form.value.Sunday
      },
      reviews: [
        {
          name: form.value.rvName,
          date: form.value.Date,
          rating: form.value.Rating,
          comments: form.value.Comments
        }
        
      ]


    }
    this.apiservice.updateRestaurant(this.restId, updateRest)
      .subscribe((data) => {
        alert('Restaurant details updated successfully!!')
        this.routers.navigateByUrl("")
      })

  }

}
