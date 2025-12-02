import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  imports: [Footer,
    Header,
    ItemsList
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
