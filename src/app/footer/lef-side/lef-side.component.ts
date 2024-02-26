import { Component } from '@angular/core';
import {SocialLinks} from "../../common/social-links/social-links";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'lef-side',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lef-side.component.html',
  styleUrl: './lef-side.component.scss'
})
export class LefSideComponent {

  protected readonly socialLinksItems = SocialLinks;
  payMethods=[
    {
      name:'mastercard',
      imgUrl:'../assets/images/footer/mastercard.png'
    },
    {
      name:'apple pay',
      imgUrl:'../assets/images/footer/aplepay.png'
    },
    {
      name:'pay pal',
      imgUrl:'../assets/images/footer/paypal.png'
    },
    {
      name:'visa',
      imgUrl:'../assets/images/footer/visa.png'
    },
    {
      name:'yMoney',
      imgUrl:'../assets/images/footer/ymoney.png'
    },
  ]
}
