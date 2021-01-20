import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchFelineComponent} from './search-feline.component';
import {SearchFelineService} from './search-feline.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

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
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    SearchFelineService
  ]
})

export class SearchFelineModule {
}
