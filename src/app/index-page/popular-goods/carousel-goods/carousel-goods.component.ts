import { Component } from '@angular/core';

@Component({
  selector: 'carousel-goods',
  standalone: true,
  imports: [],
  templateUrl: './carousel-goods.component.html',
  styleUrl: './carousel-goods.component.scss'
})
export class CarouselGoodsComponent {
  positionCarousel:number=0;

  swapLeft(){
    this.positionCarousel+=100;
  }
  swapRight(){
    this.positionCarousel-=100;
  }

}
