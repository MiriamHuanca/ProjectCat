import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {PictureFelineService} from './picture-feline.service';

@Component({
  selector: 'app-picture-feline',
  templateUrl: './picture-feline.component.html'
})

export class PictureFelineComponent implements OnInit {

  images: any[] = [];
  page = 0;
  currentIndexImage = 0;

  @ViewChild('carousel') carousel: NgbCarousel;


  constructor(config: NgbCarouselConfig,
              private pictureFelineService: PictureFelineService) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.pictureFelineService.getImages(this.page).subscribe(res => {
      this.images = res;
    });
  }

  onLoadMore(): void {
    this.page++;
    this.pictureFelineService.getImages(this.page).subscribe(res => {
      this.images = this.images.concat(res);
    });
  }

  onPagination(index: number): void {
    this.currentIndexImage = index;
    this.carousel.select('ngb-slide-' + this.currentIndexImage);
  }

}
