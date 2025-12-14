import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

export class ItemsList implements OnInit {

  public ModernMusic: ModelModernMusic[] = [];
  public filteredMusic: ModelModernMusic[] = [];
  public searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.ModernMusic = this.dataService.getItems();
    this.filteredMusic = this.ModernMusic;
  }

  onItemSelected(item: ModelModernMusic): void {
    console.log('Обраний елемент:', item);
  }

  filterItems(): void {
    const value = this.searchText.toLowerCase();

    this.filteredMusic = this.ModernMusic.filter(item =>
      item.title.toLowerCase().includes(value)
    );
  }
}
