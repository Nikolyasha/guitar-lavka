import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeGoodsComponent } from './range-goods.component';

describe('RangeGoodsComponent', () => {
  let component: RangeGoodsComponent;
  let fixture: ComponentFixture<RangeGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangeGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
