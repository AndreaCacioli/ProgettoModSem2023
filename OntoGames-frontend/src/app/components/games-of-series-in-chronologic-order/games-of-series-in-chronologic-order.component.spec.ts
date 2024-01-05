import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOfSeriesInChronologicOrderComponent } from './games-of-series-in-chronologic-order.component';

describe('GamesOfSeriesInChronologicOrderComponent', () => {
  let component: GamesOfSeriesInChronologicOrderComponent;
  let fixture: ComponentFixture<GamesOfSeriesInChronologicOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesOfSeriesInChronologicOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesOfSeriesInChronologicOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
