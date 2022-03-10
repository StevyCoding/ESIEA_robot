import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubriquePage } from './rubrique.page';

const routes: Routes = [
  {
    path: '',
    component: RubriquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubriquePageRoutingModule {}
