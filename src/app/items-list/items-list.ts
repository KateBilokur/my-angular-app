import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ItemsCard } from '../items-card/items-card';
import { ModelModernMusic } from '../shared/models/model-modern-music';
import { DataService } from '../shared/services/data-service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    ItemsCard
  ],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit, OnDestroy {

  public musicList: ModelModernMusic[] = [];
  public searchText: string = '';

  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService
      .getItemsStream()
      .subscribe(items => {
        this.musicList = items;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.searchText);
  }

  onItemSelected(item: ModelModernMusic): void {
    console.log('Обраний елемент:', item);
  }
}
