import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodpayComponent } from './methodpay.component';

describe('MethodpayComponent', () => {
  let component: MethodpayComponent;
  let fixture: ComponentFixture<MethodpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
