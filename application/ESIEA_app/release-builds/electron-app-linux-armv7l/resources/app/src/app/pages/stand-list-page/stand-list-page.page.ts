import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-stand-list-page',
  templateUrl: './stand-list-page.page.html',
  styleUrls: ['./stand-list-page.page.scss'],
})
export class StandListPagePage {
  private readonly URL = 'assets/data/robot_storage.json';
  stands: any[];

  constructor(public httpClient: HttpClient, public router : Router) {
    this.httpClient.get(this.URL)
      .subscribe((res: any) => {
        this.stands = res.stands;
        console.log(this.stands);
      });
  }
  showDetail(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item.id)
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['stand-presentation'],navigationExtras)
  }
  }


