import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Stars } from '../../shared/stars/stars';
import { CustomSlider } from '../../shared/custom-slider/custom-slider';

@Component({
  selector: 'app-reviews',
  imports: [Stars, CustomSlider],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Reviews {
  @Input() data: any;

  readonly sliderConfig = {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    navigation: true,
    centeredSlides: true,
    autoplay: { delay: 2500 },
  };

  readonly sliderMobileConfig = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    navigation: true,
    centeredSlides: true,
    autoplay: { delay: 2500 },
  };


}
