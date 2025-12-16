import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsCard } from '../items-card/items-card';
import { ModelModernMusic } from '../shared/models/model-modern-music';
import { DataService } from '../shared/services/data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    AsyncPipe,
    ItemsCard
  ],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {

  public musicList$!: Observable<ModelModernMusic[]>;
  public searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadItems();
    this.musicList$ = this.dataService.getItemsStream();
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.searchText);
  }

  onItemSelected(item: ModelModernMusic): void {
    console.log('Обраний елемент:', item);
  }
}
