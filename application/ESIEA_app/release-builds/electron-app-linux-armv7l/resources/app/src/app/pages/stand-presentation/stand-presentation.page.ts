import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stand-presentation',
  templateUrl: './stand-presentation.page.html',
  styleUrls: ['./stand-presentation.page.scss'],
})
export class StandPresentationPage implements OnInit {
stand_id : any;
stands : Array<any>;
stand: any
title : string;
location : string;
id: number;
presentation : string;
openTime : string;
closeTime : string;

private readonly URL = 'assets/data/robot_storage.json';
  constructor(public httpClient: HttpClient,public route: ActivatedRoute,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.stand_id = JSON.parse(params.special);
      }
    });
    console.log(this.stand_id)

    this.httpClient.get(this.URL)
    .subscribe((res: any) => {
      this.stands = res.stands;
      this.stand = this.stands.find( x => x.id == this.stand_id);
      this.id = this.stand.id;
      this.title = this.stand.title;
      this.presentation =  this.stand.presentation
      this.location = this.stand.location;
      this.openTime = this.stand.openTime;
      this.closeTime = this.stand.closeTime;


    });
  }
  ngOnInit() {
  }

}
