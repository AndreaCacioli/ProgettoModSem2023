import { Component } from '@angular/core';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-female-protagonist-games',
  templateUrl: './female-protagonist-games.component.html',
  styleUrl: './female-protagonist-games.component.scss'
})
export class FemaleProtagonistGamesComponent {

  constructor(private query: QueryService) { }

  getFemaleProtagonistsGames() {
    this.query.getFemaleProtagonistGames().subscribe(data => {
      console.log(data);
      console.log(data.results.bindings);
    });
  }
}
