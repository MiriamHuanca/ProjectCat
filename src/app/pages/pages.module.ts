import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from '../core/layout/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'searchFeline', pathMatch: 'full'},
      {
        path: 'searchFeline',
        loadChildren: () => import('./search-feline/search-feline.module').then(m => m.SearchFelineModule)
      },
      {
        path: 'pictureFeline',
        loadChildren: () => import('./picture-feline/picture-feline.module').then(m => m.PictureFelineModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class PagesModule {
}
