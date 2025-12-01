import { Component, Input, Output } from '@angular/core';
import { ModelModernMusic } from '../shared/models/model-modern-music';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-items-card',
  imports: [NgFor,
    NgIf,
    DatePipe
  ],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css',
})
export class ItemsCard {
  @Input() ModMusic!: ModelModernMusic;
}
