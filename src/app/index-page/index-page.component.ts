import { Component } from '@angular/core';
import { CarouselAdverstingComponent } from './carousel-adversting/carousel-adversting.component'; 
import { MainCategoriesComponent } from './main-categories/main-categories.component'

@Component({
  selector: 'index-page',
  standalone: true,
  imports: [CarouselAdverstingComponent,MainCategoriesComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {

}
