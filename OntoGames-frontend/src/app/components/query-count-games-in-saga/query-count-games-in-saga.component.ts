import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-query-count-games-in-saga',
  templateUrl: './query-count-games-in-saga.component.html',
  styleUrl: './query-count-games-in-saga.component.scss'
})
export class QueryCountGamesInSagaComponent {
  @Output() onResults = new EventEmitter()
  form = new FormGroup({
    saga: new FormControl(''),
  })

  constructor(private queryService: QueryService) { }
  public query() {
    this.queryService.getCountTitlesFromSaga(this.form.value.saga).subscribe((data: any) => {
      this.onResults.emit(data.results.bindings)
    })
  }
}
