// app.component.ts
import { Component } from '@angular/core';
import { Router, Event, NavigationStart,NavigationEnd,NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  showHeader = false;
  showFooter = false;
  showLoadingIndicator = true;
  constructor(private router: Router,) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('home');
        this.showFooter = !event.url.includes('home');
      }
    });
 }
 ngOnInit() {
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {
      this.showLoadingIndicator = true;
    } else if (
      event instanceof NavigationEnd ||
      event instanceof NavigationError
    ) {
      this.showLoadingIndicator = false;
    }
  });
}
}
