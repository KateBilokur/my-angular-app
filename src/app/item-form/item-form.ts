import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { ArticleTopic, ModelModernMusic } from '../shared/models/model-modern-music';
import { DataService } from '../shared/services/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm {

  topics = Object.values(ArticleTopic);

  itemForm = new FormGroup({
     title: new FormControl('', Validators.required),
     image_url: new FormControl('', Validators.required),
     tags: new FormControl(''),
     short_description: new FormControl('', Validators.required),
     full_description: new FormControl('', Validators.required),
     date_added: new FormControl(''),
     topic: new FormControl('', Validators.required),
     artist_name: new FormControl(''),
     song_title: new FormControl(''),
     song_genre: new FormControl('')
   });

 constructor(
   private dataService: DataService,
   private router: Router
 ) {}


  onSubmit(): void {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    const formValue = this.itemForm.value;

    const newItem: ModelModernMusic = {
      id: crypto.randomUUID(),
      title: formValue.title!,
      image_url: formValue.image_url!,
      short_description: formValue.short_description!,
      full_description: formValue.full_description!,
      topic: formValue.topic as ArticleTopic,

      tags: formValue.tags
        ? formValue.tags.split(',').map((t: string) => t.trim())
        : [],
      artist_name: formValue.artist_name || '',
      song_title: formValue.song_title || undefined,
      song_genre: formValue.song_genre || undefined,
      date_added: new Date().toISOString().split('T')[0]
    };

    this.dataService.addItem(newItem);
    this.router.navigate(['/items', newItem.id]);
    this.itemForm.reset();
  }

}
