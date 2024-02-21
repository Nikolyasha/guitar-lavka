import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselGoodsComponent } from './carousel-goods.component';

describe('CarouselGoodsComponent', () => {
  let component: CarouselGoodsComponent;
  let fixture: ComponentFixture<CarouselGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
