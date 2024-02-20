import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAdverstingComponent } from './carousel-adversting.component';

describe('CarouselAdverstingComponent', () => {
  let component: CarouselAdverstingComponent;
  let fixture: ComponentFixture<CarouselAdverstingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselAdverstingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselAdverstingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
