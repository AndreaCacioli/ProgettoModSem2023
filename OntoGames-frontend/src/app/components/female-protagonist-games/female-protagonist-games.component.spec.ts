import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleProtagonistGamesComponent } from './female-protagonist-games.component';

describe('FemaleProtagonistGamesComponent', () => {
  let component: FemaleProtagonistGamesComponent;
  let fixture: ComponentFixture<FemaleProtagonistGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FemaleProtagonistGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FemaleProtagonistGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
