import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchFelineService} from './search-feline.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-feline',
  templateUrl: './search-feline.component.html'
})
export class SearchFelineComponent implements OnInit, OnDestroy {
  title: string;
  breeds: any[];
  breedSelected: any;
  subscription: Subscription[] = [];
  isLoading = false;

  constructor(private searchFelineService: SearchFelineService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.title = 'El Buscador Felino';
    this.searchFelineService.getAllBreeds().subscribe(res => {
      this.breeds = res;

      this.subscription.push(
        this.searchFelineService.getBreedsById(this.breeds[0].id).subscribe(data => {
          this.breedSelected = data[0];
          this.isLoading = false;
        },
          errorMessage => {
            console.log(errorMessage);
            this.isLoading = false;
          })
      );
    });

  }

  ngOnDestroy(): void {
    this.subscription.forEach(item => item.unsubscribe());
  }

  onSelectBreeds(value: any): void {
    this.isLoading = true;
    this.breedSelected = null;
    this.subscription.push(
      this.searchFelineService.getBreedsById(value).subscribe(res => {
        this.breedSelected = res[0];
        this.isLoading = false;
      },
        errorMessage => {
          console.log(errorMessage);
          this.isLoading = false;
        })
    );
  }

}
