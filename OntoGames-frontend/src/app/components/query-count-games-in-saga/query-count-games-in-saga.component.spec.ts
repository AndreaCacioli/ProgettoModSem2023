import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCountGamesInSagaComponent } from './query-count-games-in-saga.component';

describe('QueryCountGamesInSagaComponent', () => {
  let component: QueryCountGamesInSagaComponent;
  let fixture: ComponentFixture<QueryCountGamesInSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryCountGamesInSagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryCountGamesInSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
