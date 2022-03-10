import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandPresentationPage } from './stand-presentation.page';

const routes: Routes = [
  {
    path: '',
    component: StandPresentationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandPresentationPageRoutingModule {}
