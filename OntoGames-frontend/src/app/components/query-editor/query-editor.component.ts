import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrl: './query-editor.component.scss'
})
export class QueryEditorComponent {
  public queryEditorForm = new FormGroup({
    query: new FormControl("", [Validators.required]),
  })

  constructor(private queryService: QueryService) {
  }

  protected sendQuery() {
    if (this.queryEditorForm.valid)
      this.queryService.getQueryResults(this.queryEditorForm.value.query!).subscribe(data => console.log(data))
    else
      alert("Error")
  }

}
