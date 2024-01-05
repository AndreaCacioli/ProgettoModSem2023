import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGameProtagonistComponent } from './find-game-protagonist.component';

describe('FindSeriesProtagonistComponent', () => {
  let component: FindGameProtagonistComponent;
  let fixture: ComponentFixture<FindGameProtagonistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindGameProtagonistComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FindGameProtagonistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
