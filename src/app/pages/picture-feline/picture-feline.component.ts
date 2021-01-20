import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {PictureFelineService} from './picture-feline.service';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  templateUrl: './picture-feline.component.html'
})

export class PictureFelineComponent implements OnInit, OnDestroy {

  title: string;
  images: any[] = [];
  page = -1;
  currentIndexImage = 0;
  subscription: Subscription[] = [];
  isLoading = false;

  @ViewChild('carousel') carousel: NgbCarousel;

  constructor(private pictureFelineService: PictureFelineService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.title = '18 Fotos Felinas';
    this.onLoadMore();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

  onLoadMore(): void {
    this.page++;
    this.isLoading = true;

    this.subscription.push(
      this.pictureFelineService.getImages(this.page).subscribe(res => {
          this.images = this.images.concat(res);
          this.isLoading = false;
          this.carousel.pause();
          this.toastrService.success('Carga exitosa.');
        },
        () => {
          this.isLoading = false;
          this.toastrService.error('Error al cargar datos.');
        }
      ));

  }

  onPagination(index: number): void {
    this.currentIndexImage = index;
    this.carousel.select('ngb-slide-' + this.currentIndexImage);
  }

}
