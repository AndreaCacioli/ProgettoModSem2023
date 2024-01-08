import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';
import { Constants } from '../../Constants/Constants';

@Component({
  selector: 'app-games-of-series-in-chronologic-order',
  templateUrl: './games-of-series-in-chronologic-order.component.html',
  styleUrl: './games-of-series-in-chronologic-order.component.scss'
})
export class GamesOfSeriesInChronologicOrderComponent {
  @Output() onResults = new EventEmitter();  @Output() onLoadingStateChange = new EventEmitter()
  protected formGroup = new FormGroup({
    seriesName: new FormControl<string>("", [Validators.required]),
    seriesLang: new FormControl<string>("en", Validators.required)
  })
  protected languages: string[];

  constructor(private query: QueryService) {
    this.languages = Constants.languages;
  }

  onClick() {
    if (this.formGroup.valid) {
      this.query.getGamesInChronologicOrderOfSeries(this.formGroup.value.seriesName!, this.formGroup.value.seriesLang!).subscribe(
        data => {
          this.onResults.emit(data.results.bindings)
          this.onLoadingStateChange.emit(false)
        }
      )
      this.onLoadingStateChange.emit(true)
    }
    else alert("error");

  }
}
