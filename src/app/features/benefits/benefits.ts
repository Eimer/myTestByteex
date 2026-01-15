import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomSlider } from '../../shared/custom-slider/custom-slider';
import { Stars } from '../../shared/stars/stars';

@Component({
  selector: 'app-benefits',
  imports: [CustomSlider, Stars],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Benefits {
  @Input() data: any;

  readonly partnersSliderConfig = {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: { clickable: true },
    autoplay: { delay: 2500 },
    // breakpoints: {
    //   768: { slidesPerView: 4 },
    //   1024: { slidesPerView: 6 }
    // },
    injectStyles: [
      `
      .swiper {
        padding-bottom: 30px !important;
        overflow: visible !important;
      }
      .swiper-pagination {
        bottom: 10px !important;
      }
      `
    ],
  };

  readonly previewSliderConfig = {
    slidesPerView: 1,
    loop: true,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 2500 },
  };

}
