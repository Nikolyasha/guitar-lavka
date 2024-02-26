import { Component } from '@angular/core';
import { RangeGoodsComponent } from "./range-goods/range-goods.component";

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [RangeGoodsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

}
