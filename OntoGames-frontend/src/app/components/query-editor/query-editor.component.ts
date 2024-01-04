import { Component } from '@angular/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-query-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './query-editor.component.html',
  styleUrl: './query-editor.component.scss'
})
export class QueryEditorComponent {
  public queryEditorForm = new FormGroup({
    query: new FormControl(""),
  })


  protected async sendQuery() {
    console.log(this.queryEditorForm.value.query);
    
  }

}
