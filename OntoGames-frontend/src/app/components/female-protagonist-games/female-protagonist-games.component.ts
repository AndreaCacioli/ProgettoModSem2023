import { Component, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-female-protagonist-games',
  templateUrl: './female-protagonist-games.component.html',
  styleUrl: './female-protagonist-games.component.scss'
})
export class FemaleProtagonistGamesComponent {

  @Output() onResults = new EventEmitter<any>();
  constructor(private query: QueryService) { }

  getFemaleProtagonistsGames() {
    this.query.getFemaleProtagonistGames().subscribe(data => {
      this.onResults.emit(data.results.bindings);
    });
  }
}
