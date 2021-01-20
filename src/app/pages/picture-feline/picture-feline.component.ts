import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {PictureFelineService} from './picture-feline.service';

@Component({
  selector: 'app-picture-feline',
  templateUrl: './picture-feline.component.html'
})

export class PictureFelineComponent implements OnInit {
  title: string;
  images: any[] = [];
  page = 0;
  currentIndexImage = 0;

  @ViewChild('carousel') carousel: NgbCarousel;


  constructor(private pictureFelineService: PictureFelineService) {
  }

  ngOnInit(): void {
    this.title = '18 Fotos Felinas';
    this.pictureFelineService.getImages(this.page).subscribe(res => this.images = res);
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
