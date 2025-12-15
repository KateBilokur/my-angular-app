import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModelModernMusic } from '../shared/models/model-modern-music';
import { NgIf, NgClass, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../shared/pipes/truncate-pipe';
import { HoverHighlightDirective } from '../shared/directives/hover-highlight';


@Component({
  selector: 'app-items-card',
  standalone: true,
  imports: [NgIf, NgClass, DatePipe, RouterLink, TruncatePipe, HoverHighlightDirective],
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
