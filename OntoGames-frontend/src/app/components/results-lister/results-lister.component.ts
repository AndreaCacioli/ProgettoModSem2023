import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-results-lister',
  templateUrl: './results-lister.component.html',
  styleUrl: './results-lister.component.scss'
})
export class ResultsListerComponent {
  @Input() results: any = undefined;
  @Input() loading: any = undefined;
  protected getKeys(o: object): any {
    return Object.keys(o);
  }
}
