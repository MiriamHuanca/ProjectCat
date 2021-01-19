import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchFelineComponent} from './search-feline.component';
import {SearchFelineService} from './search-feline.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: SearchFelineComponent}
];

@NgModule({
  declarations: [
    SearchFelineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SearchFelineService
  ]
})

export class SearchFelineModule {
}
