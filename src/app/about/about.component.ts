import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0)' }), // Start with scale 0
        animate('0.5s', style({ transform: 'scale(1)' })) // End with scale 1
      ])
    ])
  ]
})
export class AboutComponent implements OnInit{
  constructor() { }
  
  ngOnInit(): void { }
}
