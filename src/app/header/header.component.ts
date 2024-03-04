import { Component } from '@angular/core';
import { ResponsiveService } from '../ResponsiveService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDarkMode = false;
  isMobile = false;
  isMenuOpen = false; // Add a variable to track the menu state

  constructor(private responsiveService: ResponsiveService) {
    this.responsiveService.isMobileDevice().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  // Function to toggle the menu state
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onDarkModeChange(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
  }
}