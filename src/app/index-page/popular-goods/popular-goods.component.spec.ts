import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGoodsComponent } from './popular-goods.component';

describe('PopularGoodsComponent', () => {
  let component: PopularGoodsComponent;
  let fixture: ComponentFixture<PopularGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
