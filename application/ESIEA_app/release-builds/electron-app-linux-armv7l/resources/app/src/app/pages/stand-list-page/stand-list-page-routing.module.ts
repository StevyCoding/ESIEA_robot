import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandListPagePage } from './stand-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: StandListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandListPagePageRoutingModule {}
