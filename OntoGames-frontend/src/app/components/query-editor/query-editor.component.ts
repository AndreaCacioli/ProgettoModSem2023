import { Component } from '@angular/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-query-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatInputModule, HttpClientModule],
  templateUrl: './query-editor.component.html',
  styleUrl: './query-editor.component.scss'
})
export class QueryEditorComponent {
  public queryEditorForm = new FormGroup({
    query: new FormControl("", [Validators.required]),
  })

  constructor(private queryService: QueryService) {
  }


  protected async sendQuery() {
    if(this.queryEditorForm.valid)
      this.queryService.getQueryResults(this.queryEditorForm.value.query!)
    else  
      alert("Error")
  }

}
