import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RangeGoodsComponent} from "../range-goods/range-goods.component";
import {FilterGoodsComponent} from "./filter-goods/filter-goods.component";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    CommonModule,
    RangeGoodsComponent,
    FilterGoodsComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

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
  ]
}
