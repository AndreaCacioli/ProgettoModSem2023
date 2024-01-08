import { Component, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-query-titoli-in-saga',
  templateUrl: './query-titoli-in-saga.component.html',
  styleUrl: './query-titoli-in-saga.component.scss'
})
export class QueryTitoliInSagaComponent {
  @Output() onResults = new EventEmitter()
  constructor(private queryService: QueryService) { }
  public query() {
    this.queryService.getTitlesInASaga().subscribe((data: any) => {
      this.onResults.emit(data.results.bindings)
    })
  }
}
