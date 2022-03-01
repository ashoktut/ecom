import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss'],
})
export class SpecialsComponent implements OnInit {
  @Input() promoImages: any[];
  slideOptions = {
    slidesPerView: 1.1,
  };

  constructor() { }

  ngOnInit() {}

}
