import { Component } from '@angular/core';
import { QueryService } from './services/query-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private query: QueryService){}

  title = 'OntoGames-frontend';
}
