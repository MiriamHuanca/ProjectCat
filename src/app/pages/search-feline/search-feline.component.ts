import {Component, OnInit} from '@angular/core';
import {SearchFelineService} from './search-feline.service';

@Component({
  selector: 'app-search-feline',
  templateUrl: './search-feline.component.html'
})
export class SearchFelineComponent implements OnInit {

  breeds: any[];
  breedSelected: any;

  constructor(private searchFelineService: SearchFelineService) {
  }

  ngOnInit(): void {

    this.searchFelineService.getAllBreeds().subscribe(res => {
      this.breeds = res;

      this.searchFelineService.getBreedsById(this.breeds[0].id).subscribe(data => {
        this.breedSelected = data[0];
      });
    });

  }

  onSelectBreeds(value: any): void {
    this.searchFelineService.getBreedsById(value).subscribe(res => this.breedSelected = res[0]);
  }

}
