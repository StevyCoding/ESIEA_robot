import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',

    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'stand-list-page',
    loadChildren: () => import('./pages/stand-list-page/stand-list-page.module').then( m => m.StandListPagePageModule)
  },
  {
    path: 'menu-page',
    loadChildren: () => import('./pages/menu-page/menu-page.module').then( m => m.MenuPagePageModule)
  },

  {
    path: 'stand-presentation',
    loadChildren: () => import('./pages/stand-presentation/stand-presentation.module').then( m => m.StandPresentationPageModule)
  },
  {
    path: 'stand-location',
    loadChildren: () => import('./pages/stand-location/stand-location.module').then( m => m.StandLocationPageModule)
  },
  {
    path: 'rubrique',
    loadChildren: () => import('./pages/rubrique/rubrique.module').then( m => m.RubriquePageModule)
  },
  {
    path: 'rubrique-detail/:id',
    loadChildren: () => import('./pages/rubrique-detail/rubrique-detail.module').then( m => m.RubriqueDetailPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
