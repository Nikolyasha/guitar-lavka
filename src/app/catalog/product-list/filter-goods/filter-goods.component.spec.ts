import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGoodsComponent } from './filter-goods.component';

describe('FilterGoodsComponent', () => {
  let component: FilterGoodsComponent;
  let fixture: ComponentFixture<FilterGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
