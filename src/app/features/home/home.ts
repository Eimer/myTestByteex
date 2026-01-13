import { Component, inject } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';
import { Hero } from '../hero/hero';
import { Founder } from '../founder/founder';
import { Benefits } from '../benefits/benefits';
import { Reviews } from '../reviews/reviews';
import { Faq } from '../faq/faq';
import { InfoBanner } from '../info-banner/info-banner';
import { Final } from '../final/final';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Header, Hero, Founder, Benefits, Reviews, Faq, InfoBanner, Final, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private _apiService = inject(ApiService);
  pageData$!: Observable<any>;

  ngOnInit(): void {
    this.pageData$ = this._apiService.getEntries('landingPage').pipe(
      map(response => {
        if (!response?.items?.length) return null;

        const page = response.items[0];
        const assets = response.includes?.Asset || [];
        const entries = response.includes?.Entry || [];

        // Map through top-level sections
        const sections = page.fields.sections.map((link: any) => {
          const entryData = entries.find((e: any) => e.sys.id === link.sys.id);
          if (!entryData) return null;

          // 1. Process main section fields
          const fields = this._processFields(entryData.fields, assets, entries);

          return {
            type: entryData.sys.contentType.sys.id,
            ...fields
          };
        }).filter((s: any) => s !== null);

        return { Title: page.fields.title, Sections: sections };
      })
    );

    this.pageData$.subscribe((data) => {
      console.log(data);

    })
  }


  /**
 * Helper to transform Contentful links into real data/URLs
 */
  private _processFields(fields: any, assets: any[], entries: any[]): any {
    const result = { ...fields };

    Object.keys(result).forEach((key: string) => {
      const val = result[key];

      // Single Asset (Image)
      if (val?.sys?.linkType === 'Asset') {
        result[key] = this._resolveAsset(val.sys.id, assets);
      }

      // Single Nested Entry (e.g., mainReview)
      else if (val?.sys?.linkType === 'Entry') {
        const nestedEntry = entries.find((e: any) => e.sys.id === val.sys.id);
        if (nestedEntry) {
          result[key] = this._processFields(nestedEntry.fields, assets, entries);
        }
      }

      // Array of Nested Entries (e.g., FAQ cards, features list)
      else if (Array.isArray(val) && val[0]?.sys?.linkType === 'Entry') {
        result[key] = val.map((item: any) => {
          const found = entries.find((e: any) => e.sys.id === item.sys.id);
          return found ? this._processFields(found.fields, assets, entries) : null;
        }).filter(item => item !== null); // Remove unresolved items
      }

      // Array of Assets
      else if (Array.isArray(val) && val[0]?.sys?.linkType === 'Asset') {
        result[key] = val.map((item: any) => this._resolveAsset(item.sys.id, assets));
      }
    });

    return result;
  }


  private _resolveAsset(id: string, assets: any[]): string | null {
    const asset = assets.find(a => a.sys.id === id);
    return asset ? 'https:' + asset.fields.file.url : null;
  }

}
