import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubriquePageRoutingModule } from './rubrique-routing.module';
import {ComponentsModule } from '../../components/components.module';
import { RubriquePage } from './rubrique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubriquePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RubriquePage]
})
export class RubriquePageModule {}
