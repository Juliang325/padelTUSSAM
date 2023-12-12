import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jugadores-page',
    pathMatch: 'full'
  },
  {
    path: 'jugadores-page',
    loadChildren: () => import('./pages/jugadores-page/jugadores-page.module').then( m => m.JugadoresPagePageModule)
  },
  {
    path: 'detalle-page',
    loadChildren: () => import('./pages/detalle-page/detalle-page.module').then( m => m.DetallePagePageModule)
  },
  {
    path: 'detalle-page/:id',
    loadChildren: () => import('./pages/detalle-page/detalle-page.module').then( m => m.DetallePagePageModule)
  },
  {
    path: 'partidospage',
    loadChildren: () => import('./pages/partidospage/partidospage.module').then( m => m.PartidospagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
