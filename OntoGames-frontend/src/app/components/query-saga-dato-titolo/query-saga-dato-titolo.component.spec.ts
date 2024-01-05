import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySagaDatoTitoloComponent } from './query-saga-dato-titolo.component';

describe('QuerySagaDatoTitoloComponent', () => {
  let component: QuerySagaDatoTitoloComponent;
  let fixture: ComponentFixture<QuerySagaDatoTitoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuerySagaDatoTitoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuerySagaDatoTitoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
