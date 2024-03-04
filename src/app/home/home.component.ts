import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isActive = false;

  constructor() {
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  handleDocumentClick(event: MouseEvent) {
    if (!event.target || !this.hamburgerMenu || !this.hamburgerMenu.contains(event.target as Node)) {
      this.isActive = false;
    }
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  get hamburgerMenu() {
    return document.querySelector('.hamburger-menu');
  }
}
