import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ResponsiveService } from '../ResponsiveService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  isMobile = false;

  constructor(@Inject(ResponsiveService) private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile();
  }

  checkMobile() {
    this.isMobile = this.responsiveService.isMobile();
  }

  onDarkModeChange(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
  }
}
