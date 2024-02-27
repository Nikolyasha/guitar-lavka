import { Component } from '@angular/core';
import { RangeGoodsComponent } from "./range-goods/range-goods.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [RangeGoodsComponent,ProductListComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

}
