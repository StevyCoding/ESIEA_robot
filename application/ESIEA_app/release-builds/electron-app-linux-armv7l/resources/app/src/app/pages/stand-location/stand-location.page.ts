import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-stand-location',
  templateUrl: './stand-location.page.html',
  styleUrls: ['./stand-location.page.scss'],
})
export class StandLocationPage implements AfterViewInit {
  @ViewChild('imageCanvas',{static: false}) canvas:any;
  canvasElement:any;
  img:any;
  ctx:any;
  saveX:number;
  saveY:number;

  selectedColor = '#9e2956';
  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];
 
  drawing = false;
  lineWidth = 5;
  constructor(private plt: Platform) { }
ngAfterViewInit() {
    // Set the Canvas Element and its size
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 800;
    this.ctx = this.canvasElement.getContext('2d');

    this.getImage();
  }

getImage(){
  var background = new Image();
  background.src = 'assets/images/map.png';
  background.onload = () => {
    this.ctx.drawImage(background,0,0, this.canvasElement.width, this.canvasElement.height); 
    this.traceLine()  
  }
}

traceLine(){
  this.ctx.moveTo(90, 130);
  this.ctx.lineTo(95, 25);
  this.ctx.lineTo(150, 80);
  this.ctx.lineTo(205, 25);
  this.ctx.lineTo(210, 130);
  this.ctx.lineWidth = 15;
  this.ctx.stroke();
}

}
