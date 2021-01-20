import {Component} from '@angular/core';

@Component({
  template: `
    <app-header></app-header>
    <div class="container-fluid" style="height: 100%; overflow: auto;">
      <div class="row">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class PagesComponent {

}
