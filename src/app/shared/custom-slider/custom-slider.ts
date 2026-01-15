import { Component, Input, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-custom-slider',
  imports: [],
  templateUrl: './custom-slider.html',
  styleUrl: './custom-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomSlider implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef!: ElementRef;
  @Input() config: any = {};

  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, this.config);
    swiperEl.initialize();
  }


}
