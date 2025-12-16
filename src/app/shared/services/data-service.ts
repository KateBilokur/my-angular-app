import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelModernMusic } from '../models/model-modern-music';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  private itemsSubject = new BehaviorSubject<ModelModernMusic[]>([]);
  private allItems: ModelModernMusic[] = [];

  constructor(private http: HttpClient) {}

  loadItems(): void {
    this.http.get<ModelModernMusic[]>('/items').pipe(
      catchError(error => {
        console.error('Помилка завантаження елементів', error);
        return throwError(() => error);
      })
    ).subscribe(items => {
      this.allItems = items;
      this.itemsSubject.next(items);
    });
  }

  getItemsStream(): Observable<ModelModernMusic[]> {
    return this.itemsSubject.asObservable();
  }

  getItemById(id: string): Observable<ModelModernMusic> {
    return this.http.get<ModelModernMusic>(`/items/${id}`).pipe(
      catchError(error => {
        console.error('Помилка отримання елемента', error);
        return throwError(() => error);
      })
    );
  }


  addItem(item: ModelModernMusic): Observable<ModelModernMusic> {
    return this.http.post<ModelModernMusic>('/items', item).pipe(
      catchError(error => {
        console.error('Помилка додавання елемента', error);
        return throwError(() => error);
      })
    );
  }


  filterItems(searchText: string): void {
    const value = searchText.toLowerCase();

    if (!value) {
      this.itemsSubject.next(this.allItems);
      return;
    }

    const filtered = this.allItems.filter(
      (item: ModelModernMusic) =>
        item.title.toLowerCase().includes(value)
    );

    this.itemsSubject.next(filtered);
  }
}
