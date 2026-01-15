import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Stars } from '../../shared/stars/stars';
import { CustomSlider } from '../../shared/custom-slider/custom-slider';

@Component({
  selector: 'app-how-works',
  imports: [Stars, CustomSlider],
  templateUrl: './how-works.html',
  styleUrl: './how-works.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HowWorks {
  @Input() data: any;

  readonly sliderConfig = {
    slidesPerView: 1,
    loop: true,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 2500 },
  };

}
