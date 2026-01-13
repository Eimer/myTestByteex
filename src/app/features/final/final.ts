import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-final',
  imports: [],
  templateUrl: './final.html',
  styleUrl: './final.scss',
})
export class Final {
  @Input() data: any;
}
