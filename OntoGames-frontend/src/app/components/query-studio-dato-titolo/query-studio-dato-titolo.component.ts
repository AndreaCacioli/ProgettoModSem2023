import { Component } from '@angular/core';
import { QueryService } from '../../services/query-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-query-studio-dato-titolo',
  templateUrl: './query-studio-dato-titolo.component.html',
  styleUrl: './query-studio-dato-titolo.component.scss'
})
export class QueryStudioDatoTitoloComponent {
  form = new FormGroup({
		title: new FormControl(''),
  })

  constructor(private queryService:QueryService){}
  public query(){
    this.queryService.getStudioFromTitle(this.form.value.title).subscribe((data: any)=>{
      console.log(data)
    })
  }
}
