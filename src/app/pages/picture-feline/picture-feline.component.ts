import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {PictureFelineService} from './picture-feline.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-picture-feline',
  templateUrl: './picture-feline.component.html'
})

export class PictureFelineComponent implements OnInit, OnDestroy {
  title: string;
  images: any[] = [];
  page = 0;
  currentIndexImage = 0;
  subscription: Subscription[] = [];
  isLoading = false;

  @ViewChild('carousel') carousel: NgbCarousel;

  constructor(private pictureFelineService: PictureFelineService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.title = '18 Fotos Felinas';
    this.subscription.push(
      this.pictureFelineService.getImages(this.page).subscribe(res => {
        this.images = res;
        this.isLoading = false;
        this.carousel.select('ngb-slide-' + this.currentIndexImage);
        this.carousel.pause();
      },
        errorMessage => {
          console.log(errorMessage);
          this.isLoading = false;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(item => item.unsubscribe());
  }

  onLoadMore(): void {
    this.page++;
    this.subscription.push(
      this.pictureFelineService.getImages(this.page).subscribe(res => {
        this.images = this.images.concat(res);
      })
    );
  }

  onPagination(index: number): void {
    this.currentIndexImage = index;
    this.carousel.select('ngb-slide-' + this.currentIndexImage);
  }

}
