import {Component} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `<div class="lds-ripple"><div></div><div></div></div>`,
  styleUrls: ['../../../styles/loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {}
