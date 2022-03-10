import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandLocationPage } from './stand-location.page';

const routes: Routes = [
  {
    path: '',
    component: StandLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandLocationPageRoutingModule {}
