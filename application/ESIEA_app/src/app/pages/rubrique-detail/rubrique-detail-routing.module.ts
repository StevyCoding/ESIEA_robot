import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubriqueDetailPage } from './rubrique-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RubriqueDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubriqueDetailPageRoutingModule {}
