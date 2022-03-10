import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';
import { StandPresentationPageRoutingModule } from './stand-presentation-routing.module';
import { StandPresentationPage } from './stand-presentation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    StandPresentationPageRoutingModule
  ],
  declarations: [StandPresentationPage]
})
export class StandPresentationPageModule {}
