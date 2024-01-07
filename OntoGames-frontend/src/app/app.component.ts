import { Component, Input } from '@angular/core';
import { QueryService } from './services/query-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  updateHolder($event: any) {
    this.holder = $event;
  }
  protected selected: string = "editor";
  @Input() protected holder: any;
  title = 'OntoGames-frontend';

  query9() {
    this.selected = 'query9'
  }
  query8() {
    this.selected = 'query8'
  }
  query7() {
    this.selected = 'query7'
  }
  query6() {
    this.selected = 'query6'
  }
  query5() {
    this.selected = 'query5'
  }
  query4() {
    this.selected = 'query4'
  }
  query3() {
    this.selected = 'query3'
  }
  query2() {
    this.selected = 'query2'
  }
  query1() {
    this.selected = 'query1'
  }
  editor() {
    this.selected = 'editor'
  }
}
