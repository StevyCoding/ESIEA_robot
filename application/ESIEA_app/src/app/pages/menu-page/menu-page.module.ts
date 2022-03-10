import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from './menu-page-routing.module';
import {ComponentsModule } from '../../components/components.module';
import { MenuPagePage } from './menu-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuPagePage]
})
export class MenuPagePageModule {}
