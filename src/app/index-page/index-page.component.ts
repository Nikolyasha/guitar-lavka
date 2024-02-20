import { Component } from '@angular/core';
import { CarouselAdverstingComponent } from './carousel-adversting/carousel-adversting.component'; 

@Component({
  selector: 'index-page',
  standalone: true,
  imports: [CarouselAdverstingComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {

}
