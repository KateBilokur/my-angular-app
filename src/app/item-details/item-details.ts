import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterModule  } from '@angular/router';

import { DataService } from '../shared/services/data-service';
import { ModelModernMusic } from '../shared/models/model-modern-music';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [NgIf, RouterModule ],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetails implements OnInit {

  public item?: ModelModernMusic;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getItemById(id).subscribe(item => {
        this.item = item;
      });

    }
  }
}
