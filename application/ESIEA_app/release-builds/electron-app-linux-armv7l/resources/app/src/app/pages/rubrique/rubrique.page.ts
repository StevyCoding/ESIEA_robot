import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.page.html',
  styleUrls: ['./rubrique.page.scss'],
  providers: [Keyboard]
})
export class RubriquePage implements OnInit {
  isKeyboardHide=true;
  private readonly URL = 'assets/data/robot_storage.json';
  rubriques: any[];
  constructor(public keyboard:Keyboard,public httpClient: HttpClient,public router :Router) {
    this.httpClient.get(this.URL)
    .subscribe((res: any) => {
      this.rubriques = res.rubriques;
    });
  }
  showDetail(item) {
    this.router.navigate(['rubrique-detail/'+item.id])
  }
  ionViewWillEnter(){
    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
      // console.log('SHOWK');
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
      // console.log('HIDEK');
    });
    
  }


  ngOnInit() {
  }


}
