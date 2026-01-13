import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-works',
  imports: [],
  templateUrl: './how-works.html',
  styleUrl: './how-works.scss',
})
export class HowWorks {
  @Input() data: any;
}
