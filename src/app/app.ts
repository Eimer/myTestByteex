import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './core/services/api.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._apiService.getEntries('landingPage')
      .pipe(
        map(response => {
          return response;
        })
      )
      .subscribe();
  }
}
