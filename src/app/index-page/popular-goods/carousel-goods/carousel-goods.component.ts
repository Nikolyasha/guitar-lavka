import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'carousel-goods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-goods.component.html',
  styleUrl: './carousel-goods.component.scss'
})
export class CarouselGoodsComponent {
  positionCarousel:number=0;

  goodsItems=[
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
    {
      name:'Enya EUC-MAD',
      category:'укулеле',
      price:24890,
      discountedPrice:24890,
      reviews:7,
    },
  ]

  currentIndexOfCarouselList:number=0;
  swapLeft(){
    if (this.positionCarousel!=0){
      this.positionCarousel+=100;
      this.currentIndexOfCarouselList-=4;
    }else {
      this.positionCarousel=(Math.ceil(this.goodsItems.length/4)-1)*-100;
      this.currentIndexOfCarouselList=(Math.ceil(this.goodsItems.length/4)-1)*4;
    }
  }
  swapRight(){
    this.positionCarousel-=100;
    this.currentIndexOfCarouselList+=4;
    if (this.positionCarousel==Math.ceil(this.goodsItems.length/4)*-100){
      this.positionCarousel=0;
      this.currentIndexOfCarouselList=0;
    }
  }

}
