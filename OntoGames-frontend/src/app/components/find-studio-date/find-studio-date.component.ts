import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';
import { Constants } from '../../Constants/Constants'

@Component({
  selector: 'app-find-studio-date',
  templateUrl: './find-studio-date.component.html',
  styleUrl: './find-studio-date.component.scss'
})
export class FindStudioDateComponent {
  protected formGroup = new FormGroup({
    studioName: new FormControl<string>("", [Validators.required]),
    studioLang: new FormControl<string>("en", Validators.required)
  })
  protected languages: string[];

  constructor(private query: QueryService){
    this.languages = Constants.languages;
  }

  onClick(){
    if(this.formGroup.valid){
      this.query.getStudiosFoundationDate(this.formGroup.value.studioName!, this.formGroup.value.studioLang!).subscribe(
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
