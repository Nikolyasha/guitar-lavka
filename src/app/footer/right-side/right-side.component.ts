import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'right-side',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {

  menuItems=new Map([
    ['каталог',['Гитары','Укулеле','Аксесуары','Струны']],
    ['сервис',['Оплата','Гарантия','Доставка']],
    ['услуги',['Ремонт','Онлайн подбор','Обучение','Комиссионка']]
  ]);
  getKeys() {
    return Array.from(this.menuItems.keys());
  }
  getValues(key) {
    return Array.from(this.menuItems.get(key));
  }

}
