import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudioDateComponent } from './find-studio-date.component';

describe('FindStudioDateComponent', () => {
  let component: FindStudioDateComponent;
  let fixture: ComponentFixture<FindStudioDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindStudioDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindStudioDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
