import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-feline',
  templateUrl: './picture-feline.component.html',
  styleUrls: ['./picture-feline.component.scss']
})
export class PictureFelineComponent implements OnInit {
  images = ['http://1.bp.blogspot.com/-7DModTwPGpw/UGxbSBd6XNI/AAAAAAAAeWQ/MehoApHGu6U/s1600/1+paisajes.jpg',
    'https://magddapast.files.wordpress.com/2013/12/paisaje-mc3a1gico.jpg',
    'https://magddapast.files.wordpress.com/2013/12/paisajes-de-mar.jpg?w=1200&h='];
  constructor() { }

  ngOnInit(): void {
  }

}
