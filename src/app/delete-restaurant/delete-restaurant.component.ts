import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  restId: any

  constructor(private activatedrouter: ActivatedRoute, private apiservice: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe((result) => {
      this.restId = result['id']
    })
    this.apiservice.deleteRestaurant(this.restId)
      .subscribe((data) => {
        alert('Restaurant details removed successfully!!')
        this.router.navigateByUrl("")
      })



  }
}


