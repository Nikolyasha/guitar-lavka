import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'brands',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  brandsItems:string[]=[
    '../../../../assets/images/index-page/brands/aNueNue.png',
    '../../../../assets/images/index-page/brands/kepma.png',
    '../../../../assets/images/index-page/brands/elixir.png',
    '../../../../assets/images/index-page/brands/joyo.png',
    '../../../../assets/images/index-page/brands/godin.png',
    '../../../../assets/images/index-page/brands/kremona.png',
    '../../../../assets/images/index-page/brands/maton.png',
    '../../../../assets/images/index-page/brands/tom.png',
    '../../../../assets/images/index-page/brands/enyaMusic.png',
    '../../../../assets/images/index-page/brands/sigmaGuitars.png',
  ];

}
