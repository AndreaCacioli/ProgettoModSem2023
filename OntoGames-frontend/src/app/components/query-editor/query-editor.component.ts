import { Component } from '@angular/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-query-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './query-editor.component.html',
  styleUrl: './query-editor.component.scss'
})
export class QueryEditorComponent {
  public queryEditorForm = new FormGroup({
    query: new FormControl<string>("", [Validators.required]),
  })

  protected sendQuery() {
    console.log(this.queryEditorForm.value.query);
  }

}
