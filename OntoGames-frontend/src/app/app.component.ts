import { Component } from '@angular/core';
import { QueryService } from './services/query-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private query: QueryService){}

  getFemaleProtagonistsGames() {
    this.query.getFemaleProtagonistGames().subscribe(data => {
        console.log(data);
        console.log(data.results.bindings);
      });
  }
  getMutualLoversGames() {
    this.query.getMutualLoversGames().subscribe(data => {
        console.log(data);
        console.log(data.results.bindings);
    });
  }
  title = 'OntoGames-frontend';
}
