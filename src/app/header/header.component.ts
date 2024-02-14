import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component'; 
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopHeaderComponent,MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
