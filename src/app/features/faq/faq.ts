import { Component, Input } from '@angular/core';
import { Stars } from '../../shared/stars/stars';

@Component({
  selector: 'app-faq',
  imports: [Stars],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  @Input() data: any;

  activeIndex: number | null = null;

  toggleAccordion(index: number): void {

    this.activeIndex = this.activeIndex === index ? null : index;
  }

}
