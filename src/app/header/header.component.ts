import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restNote="Search Restaurant here"

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  search(event:any){
    console.log(event.target.value);
    let searchKey=event.target.value
    //next() is used to add anything to behaviorsubject
    this.api.search.next(searchKey)
  }

}
