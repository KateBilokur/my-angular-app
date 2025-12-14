import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModelModernMusic } from '../shared/models/model-modern-music';
import { NgIf, NgClass, DatePipe } from '@angular/common';

@Component({
  selector: 'app-items-card',
  standalone: true,
  imports: [NgIf, NgClass, DatePipe],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css',
})
export class ItemsCard {
  @Input() ModMusic!: ModelModernMusic;

  @Output() selectItem = new EventEmitter<ModelModernMusic>();

  onSelect(): void {
    this.selectItem.emit(this.ModMusic);
  }
}
