import { Component } from '@angular/core';
import { CarouselGoodsComponent} from "./carousel-goods/carousel-goods.component";

@Component({
  selector: 'popular-goods',
  standalone: true,
  imports: [CarouselGoodsComponent],
  templateUrl: './popular-goods.component.html',
  styleUrl: './popular-goods.component.scss'
})
export class PopularGoodsComponent {

}
