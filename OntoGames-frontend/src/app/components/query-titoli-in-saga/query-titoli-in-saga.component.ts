import { Component } from '@angular/core';
import { QueryService } from '../../services/query-service.service';

@Component({
  selector: 'app-query-titoli-in-saga',
  templateUrl: './query-titoli-in-saga.component.html',
  styleUrl: './query-titoli-in-saga.component.scss'
})
export class QueryTitoliInSagaComponent {
  constructor(private queryService:QueryService){}
  public query(){
    this.queryService.getTitlesInASaga().subscribe((data: any)=>{
      console.log(data)
    })
  }
}
