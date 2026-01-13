import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {
  @Input() data: any;
}
