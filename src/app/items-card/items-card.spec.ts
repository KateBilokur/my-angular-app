import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCard } from './items-card';

describe('ItemsCard', () => {
  let component: ItemsCard;
  let fixture: ComponentFixture<ItemsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
