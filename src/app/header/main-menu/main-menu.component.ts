import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  logoMenu:string="../../../assets/images/main-menu/logo.svg";
  mainMenuLinks:string[]=["Каталог","Услуги","О нас","Доставка","Отзывы","Обучение","Контакты","Опт"];

}
