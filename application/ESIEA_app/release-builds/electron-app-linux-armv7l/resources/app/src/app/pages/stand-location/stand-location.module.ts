import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandLocationPageRoutingModule } from './stand-location-routing.module';

import { StandLocationPage } from './stand-location.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandLocationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StandLocationPage]
})
export class StandLocationPageModule {}
