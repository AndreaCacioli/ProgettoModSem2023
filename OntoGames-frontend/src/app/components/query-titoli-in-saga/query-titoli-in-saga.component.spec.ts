import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTitoliInSagaComponent } from './query-titoli-in-saga.component';

describe('QueryTitoliInSagaComponent', () => {
  let component: QueryTitoliInSagaComponent;
  let fixture: ComponentFixture<QueryTitoliInSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryTitoliInSagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryTitoliInSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
