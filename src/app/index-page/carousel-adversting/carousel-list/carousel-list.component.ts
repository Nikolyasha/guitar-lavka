import { Component, ElementRef, ViewChild ,  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carousel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-list.component.html',
  styleUrl: './carousel-list.component.scss'
})
export class CarouselListComponent {

  positionCarousel:number=0;
  carouselItems=[
    {
      title:'Takamine',
      subtitle:'гитара',
      info:'винтажная 12 струнная GJ72CE - 12BSB',
      backgroundIMG:'../../../../assets/images/index-page/carousel-adversting/carousel-list/carousel-image-1.png'
    },{
      title:'Видео звонок в магазин',
      info:'Эта фунция помогает увидеть и услышать инструмент в реальном времени, что заметно упрощает выбор',
      backgroundIMG:'../../../../assets/images/index-page/carousel-adversting/carousel-list/carousel-image-3.png'
    },{
      title:'Отстройка каждого инструмента',
      info:'Наши мастера отстраивают каждый инструмент перед отправкой',
      backgroundIMG:'../../../../assets/images/index-page/carousel-adversting/carousel-list/carousel-image-2.png'
    },{
      title:'Kepma G1',
      subtitle:'Акустическая гитара',
      info:'Инструмент из премиальной линейки G1',
      backgroundIMG:'../../../../assets/images/index-page/carousel-adversting/carousel-list/carousel-image-4.png'
    }
  ]

  swapCarouselRight(){
    this.positionCarousel-=100;
    if(this.positionCarousel==this.carouselItems.length*-100){
      this.positionCarousel=0;
    }
  };

  swapCarouselLeft(){
    if(this.positionCarousel!=0){
      this.positionCarousel+=100;
    }else{
      this.positionCarousel=(this.carouselItems.length-1)*-100;
    }
  };

}
