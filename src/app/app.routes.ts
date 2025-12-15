import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';


export const routes: Routes = [
  { path: 'items', component: ItemsList },
  { path: 'items/:id', component: ItemDetails },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];
