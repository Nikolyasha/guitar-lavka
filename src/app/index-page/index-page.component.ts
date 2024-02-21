import { Component } from '@angular/core';
import { CarouselAdverstingComponent } from './carousel-adversting/carousel-adversting.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component'
import { BrandsComponent} from "./brands/brands.component";
import { PopularGoodsComponent} from "./popular-goods/popular-goods.component";

@Component({
  selector: 'index-page',
  standalone: true,
  imports: [CarouselAdverstingComponent,MainCategoriesComponent,BrandsComponent,PopularGoodsComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {

}
