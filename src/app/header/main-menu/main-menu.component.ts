import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  logoMenu:string="../../../assets/images/main-menu/logo.svg";
  mainMenuLinks=[
    {
      name:'Каталог',
      linkURL:'/catalog'
    },
    {
      name:'Услуги',
      linkURL:'/'
    },
    {
      name:'О нас',
      linkURL:'/'
    },
    {
      name:'Доставка',
      linkURL:'/'
    },
    {
      name:'Отзывы',
      linkURL:'/'
    },
    {
      name:'Обучение',
      linkURL:'/'
    },
    {
      name:'Контакты',
      linkURL:'/'
    },
    {
      name:'Опт',
      linkURL:'/'
    },
  ];

}
