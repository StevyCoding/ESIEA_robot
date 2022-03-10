import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubriqueDetailPageRoutingModule } from './rubrique-detail-routing.module';
import {ComponentsModule } from '../../components/components.module';
import { RubriqueDetailPage } from './rubrique-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubriqueDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RubriqueDetailPage]
})
export class RubriqueDetailPageModule {}
