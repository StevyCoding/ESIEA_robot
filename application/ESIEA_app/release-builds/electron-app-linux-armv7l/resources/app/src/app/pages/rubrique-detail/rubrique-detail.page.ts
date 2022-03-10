import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rubrique-detail',
  templateUrl: './rubrique-detail.page.html',
  styleUrls: ['./rubrique-detail.page.scss'],
})
export class RubriqueDetailPage implements OnInit {
  rubrique_id:any;
  rubriques : Array<any>;
  rubrique : any
  private readonly URL = 'assets/data/robot_storage.json';
  constructor(public httpClient: HttpClient,public activatedRoute: ActivatedRoute) { 
    this.rubrique_id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.rubrique_id)

    this.httpClient.get(this.URL)
    .subscribe((res: any) => {
      this.rubriques = res.rubriques;
      this.rubrique = this.rubriques.find( x => x.id == this.rubrique_id).description;
    });



  }

  ngOnInit() {
  }

}
