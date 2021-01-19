import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Buscador de Felinos';
  }

}
