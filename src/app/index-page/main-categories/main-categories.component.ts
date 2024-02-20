import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-categories.component.html',
  styleUrl: './main-categories.component.scss'
})
export class MainCategoriesComponent {
  categoriesItems=[
    {
      title:'Гитары',
      backgroundIMG:'../../assets/images/index-page/main-categories/category-guitar.png'
    },
    {
      title:'Укулуле',
      backgroundIMG:'../../assets/images/index-page/main-categories/category-ukulele.png'
    },
    {
      title:'Аксесуары',
      backgroundIMG:'../../assets/images/index-page/main-categories/category-more.png'
    },
    {
      title:'Струны',
      backgroundIMG:'../../assets/images/index-page/main-categories/category-strings.png'
    },
    
  ]
}
