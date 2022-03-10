import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandListPagePageRoutingModule } from './stand-list-page-routing.module';
import { StandListPagePage } from './stand-list-page.page';
import {ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandListPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [StandListPagePage]
})
export class StandListPagePageModule {

}
