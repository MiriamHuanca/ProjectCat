import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchFelineService} from './search-feline.service';
import {Subscription} from 'rxjs';
import {ToastrService} from "ngx-toastr";

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

  constructor(private searchFelineService: SearchFelineService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.title = 'El Buscador Felino';

    this.subscription.push(
      this.searchFelineService.getAllBreeds().subscribe(res => {
        this.breeds = res;
        this.breeds.length > 0 ? this.onSelectBreeds(this.breeds[0].id) : '';
      })
    );

  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

  onSelectBreeds(value: any): void {
    this.isLoading = true;
    this.breedSelected = null;

    this.subscription.push(
      this.searchFelineService.getBreedsById(value).subscribe(res => {
          this.breedSelected = res[0];
          this.isLoading = false;
          this.toastrService.success('Datos cargados.');
        },
        error => {
          this.toastrService.error('Error al cargar datos.');
          this.isLoading = false;
        })
    );

  }

}
