import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchFelineComponent} from './search-feline.component';

const routes: Routes = [
  {path: '', component: SearchFelineComponent}
];

@NgModule({
  declarations: [
    SearchFelineComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SearchFelineModule {}
