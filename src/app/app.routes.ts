import { Routes } from '@angular/router';
import { IndexPageComponent } from "./index-page/index-page.component";
import { CatalogComponent } from "./catalog/catalog.component";

export const routes: Routes = [
  {path:'',component:IndexPageComponent},
  {path:'catalog',component:CatalogComponent}
];
