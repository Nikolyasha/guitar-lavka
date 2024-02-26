import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'range-goods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './range-goods.component.html',
  styleUrl: './range-goods.component.scss'
})
export class RangeGoodsComponent {


  accordionItems=new Map([
    ['Укулеле',{isDetected:false,list:['Тенор','Сопрано','Концерт']}],
    ['Гитары',{isDetected:false,list:['Акустические','Электрокустические','Трансакустические','Электрогитары','Классические']}],
    ['Аксесуары',{isDetected:false,list:['Чехлы','Тюнеры','Комбоусилители']}],
    ['Струны',{isDetected:false,list:['Металические','Нейлоновые']}],
  ]);

  getKeys(){
    return Array.from(this.accordionItems.keys());
  };
  getValues(key:string){
    return this.accordionItems.get(key).list;
  };
  getIsDetected(key:string){
    return this.accordionItems.get(key).isDetected;
  };

  openAccordionItem(key:string){
    this.accordionItems.get(key).isDetected=!this.accordionItems.get(key).isDetected
  }
}
