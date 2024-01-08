import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualLoversGamesComponent } from './mutual-lovers-games.component';

describe('MutualLoversGamesComponent', () => {
  let component: MutualLoversGamesComponent;
  let fixture: ComponentFixture<MutualLoversGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MutualLoversGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MutualLoversGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
