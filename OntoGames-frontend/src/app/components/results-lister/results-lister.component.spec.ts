import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListerComponent } from './results-lister.component';

describe('ResultsListerComponent', () => {
  let component: ResultsListerComponent;
  let fixture: ComponentFixture<ResultsListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsListerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultsListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
