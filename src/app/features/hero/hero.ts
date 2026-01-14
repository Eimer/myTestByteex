import { Component, Input } from '@angular/core';
import { Stars } from '../../shared/stars/stars';

@Component({
  selector: 'app-hero',
  imports: [Stars],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() data: any;
}
