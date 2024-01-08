import { Component, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-mutual-lovers-games',
  templateUrl: './mutual-lovers-games.component.html',
  styleUrl: './mutual-lovers-games.component.scss'
})
export class MutualLoversGamesComponent {
  @Output() onResults = new EventEmitter()

  constructor(private query: QueryService) { }

  getMutualLoversGames() {
    this.query.getMutualLoversGames().subscribe(data => {
      this.onResults.emit(data.results.bindings);
    });
  }
}
