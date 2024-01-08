import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';
import { Constants } from '../../Constants/Constants';

@Component({
  selector: 'app-find-game-protagonist',
  templateUrl: './find-game-protagonist.component.html',
  styleUrl: './find-game-protagonist.component.scss'
})
export class FindGameProtagonistComponent {
  @Output() onResults = new EventEmitter()
  protected formGroup = new FormGroup({
    gameName: new FormControl<string>("", [Validators.required]),
    gameLang: new FormControl<string>("en", Validators.required)
  })
  protected languages: string[];

  constructor(private query: QueryService) {
    this.languages = Constants.languages;
  }

  onClick() {
    if (this.formGroup.valid) {
      this.query.getProtagonistOfGame(this.formGroup.value.gameName!, this.formGroup.value.gameLang!).subscribe(
        data => {
          const result = data.results.bindings;
          console.log(result);
          this.onResults.emit(data.results.bindings)
        }
      )
    }
    else alert("error");

  }
}
