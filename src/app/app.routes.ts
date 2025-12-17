import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';
import { authGuard } from './shared/guards/auth.guard';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  { path: 'items', component: ItemsList },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'items/new', component: ItemForm, canActivate: [authGuard] },
  { path: 'items/:id', component: ItemDetails },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];
