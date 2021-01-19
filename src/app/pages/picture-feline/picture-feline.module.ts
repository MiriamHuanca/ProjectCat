import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {PictureFelineComponent} from './picture-feline.component';

import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PictureFelineService} from './picture-feline.service';

const routes: Routes = [
  {path: '', component: PictureFelineComponent}
];

@NgModule({
  declarations: [
    PictureFelineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [
    PictureFelineService
  ]
})

export class PictureFelineModule {
}
