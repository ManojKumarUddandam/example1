
import { Injectable } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private resizeObservable: Observable<Event>;
  private currentWidth: number=0;

  constructor() {
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeObservable.pipe(
      map(() => window.innerWidth)
    ).subscribe(width => {
      this.currentWidth = width;
    });
  }

  isMobile(): boolean {
    return this.currentWidth <= 768;
  }

}