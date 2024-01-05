import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';
import { Constants } from '../../Constants/Constants';

@Component({
  selector: 'app-games-of-series-in-chronologic-order',
  templateUrl: './games-of-series-in-chronologic-order.component.html',
  styleUrl: './games-of-series-in-chronologic-order.component.scss'
})
export class GamesOfSeriesInChronologicOrderComponent {
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
      this.query.getProtagonistOfGame(this.formGroup.value.seriesName!, this.formGroup.value.seriesLang!).subscribe(
        data => {
          const result = data.results.bindings;
          console.log(result);
          console.log(data)
        }
      )
    }
    else alert("error");

  }
}
