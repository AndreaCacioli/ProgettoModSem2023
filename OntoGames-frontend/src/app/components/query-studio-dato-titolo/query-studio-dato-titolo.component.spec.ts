import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryStudioDatoTitoloComponent } from './query-studio-dato-titolo.component';

describe('QueryStudioDatoTitoloComponent', () => {
  let component: QueryStudioDatoTitoloComponent;
  let fixture: ComponentFixture<QueryStudioDatoTitoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryStudioDatoTitoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryStudioDatoTitoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
