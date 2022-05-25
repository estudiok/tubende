import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartshopingComponent } from './cartshoping.component';

describe('CartshopingComponent', () => {
  let component: CartshopingComponent;
  let fixture: ComponentFixture<CartshopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartshopingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartshopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
