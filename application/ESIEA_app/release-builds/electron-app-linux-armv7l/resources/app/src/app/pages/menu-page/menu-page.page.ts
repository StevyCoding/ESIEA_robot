import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
  providers: [Keyboard]
})
export class MenuPagePage implements OnInit {
  isKeyboardHide=true;

  constructor(public keyboard:Keyboard) {}
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
