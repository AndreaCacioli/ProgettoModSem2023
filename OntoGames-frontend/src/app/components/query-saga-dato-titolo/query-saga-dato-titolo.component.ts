import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-query-saga-dato-titolo',
  templateUrl: './query-saga-dato-titolo.component.html',
  styleUrl: './query-saga-dato-titolo.component.scss'
})
export class QuerySagaDatoTitoloComponent {
  form = new FormGroup({
		title: new FormControl(''),
  })

  constructor(private queryService:QueryService){}
  public query(){
    this.queryService.getSagaFromTitle(this.form.value.title).subscribe((data: any)=>{
      console.log(data)
    })
  }
}
