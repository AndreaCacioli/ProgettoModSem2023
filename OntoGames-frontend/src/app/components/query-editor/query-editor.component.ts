import { Component } from '@angular/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }


  protected async sendQuery() {
    console.log(this.queryEditorForm.value.query);
    const endpoint = "http://localhost:7200/repositories/OntoGames"
    const httpHeaders: HttpHeaders = new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-encoded'
    );
    const body: HttpParams = new HttpParams().set(
      'query',
      `PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
      PREFIX wd: <http://www.wikidata.org/entity/>
      PREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>

      select ?protagonist ?gameName where { 
        ?game a wd:Game .
        ?game :name ?gameName .
        filter (str(?gameName) = "Martha is Dead") . 
        filter (lang(?gameName) = "en") .
        ?protagonist :isProtagonistOf ?game
      } limit 100`,
    );
    this.http.post(endpoint, body.toString(), {headers: httpHeaders}).subscribe(data => {
      console.log(data);
    });

  }

}
