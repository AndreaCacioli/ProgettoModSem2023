import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-lister',
  templateUrl: './results-lister.component.html',
  styleUrl: './results-lister.component.scss'
})
export class ResultsListerComponent {
  @Input() results: any = undefined;

}
