import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private httpHeaders: HttpHeaders
  private endpoint: string
  constructor(private http: HttpClient) {
    this.endpoint = "http://localhost:7200/repositories/OntoGames"
    this.httpHeaders = new HttpHeaders().set(
      'Content-type', 'application/x-www-form-urlencoded; charset=UTF-8',
    ).set('Accept', 'application/x-sparqlstar-results+json, application/sparql-results+json;q=0.9, /;q=0.8');
  }

  //Query 1

  public getTitlesInASaga():Observable<any>{
    const query =`
    PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>

    select ?titolo where{
      ?game a wd:Game .
      ?saga a :Saga .
      ?saga odp:hasItem ?game .
      ?game :name ?titolo .
      filter(lang(?titolo)="en")
    }limit 100
    `
    const body: HttpParams = new HttpParams().set(
      'query', query)

    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })
  }

  //Query2
  public getSagaFromTitle(title:any):Observable<any>{
    const query =`
    PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>

    select ?seriesName where{
      ?g a wd:Game .
      ?series a :Saga .
      ?series odp:hasItem ?g .
      ?series :name ?seriesName .
      ?g :name ?gName .
      filter(lang(?seriesName)="en") .
      filter(lang(?gName)="en") .
      filter(str(?gName)="${title}")
    }limit 100
    `
    console.log(query)
    const body: HttpParams = new HttpParams().set(
      'query', query)

    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })
  }

  //Query3
  public getStudioFromTitle(title:any):Observable<any>{
    const query =`
    PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>

    select ?studioName where{
      ?g a wd:Game .
      ?g :name ?gName .
      filter(lang(?gName)="en") .
      filter(str(?gName)="${title}")
      ?g :madeBy ?studio .
      ?studio :name ?studioName .
      filter(lang(?studioName)="it") .
    }limit 100
    `
    console.log(query)
    const body: HttpParams = new HttpParams().set(
      'query', query)

    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })
  }
  //Query4
  public getCountTitlesFromSaga(saga:any):Observable<any>{
    const query =`
    PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>

    select (COUNT(?titles) as ?count) where{
      ?series a :Saga .
      ?series :name ?seriesName .
      filter(lang(?seriesName)="en") .
      filter(str(?seriesName)="${saga}")
      ?series odp:hasItem ?titles
    }limit 100
    `
    console.log(query)
    const body: HttpParams = new HttpParams().set(
      'query', query)

    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })
  }

  //Query 6
  public getProtagonistOfSeries(gameName: string, gameNameLang: string) {
    const query =
      `PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>

    select ?protagonist ?gameName where { 
      ?game a wd:Game .
      ?game :name ?gameName .
      filter (str(?gameName) = "${gameName}") . 
      filter (lang(?gameName) = "${gameNameLang}") .
      ?protagonist :isProtagonistOf ?game
    } limit 100`
    const body: HttpParams = new HttpParams().set(
      'query', query)

    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })

  }

  public getQueryResults(query:string){
    const body: HttpParams = new HttpParams().set(
      'query', query)

    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })
  }

}
