import { Component, EventEmitter, NgZone, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrl: './query-editor.component.scss'
})
export class QueryEditorComponent {
  @Output() onResults = new EventEmitter<any>();
  @Output() onLoadingStateChange = new EventEmitter<any>();
  public queryEditorForm = new FormGroup({
    query: new FormControl("", [Validators.required]),
  })

  constructor(private queryService: QueryService,private _ngZone: NgZone) {
  }

  protected sendQuery() {
    if (this.queryEditorForm.valid){
      this.queryService.getQueryResults(this.queryEditorForm.value.query!).subscribe(data => {
        this.onResults.emit(data.results.bindings);
        this.onLoadingStateChange.emit(false)
      })
      this.onLoadingStateChange.emit(true)
    }
    else
      alert("Error")
  }
  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
