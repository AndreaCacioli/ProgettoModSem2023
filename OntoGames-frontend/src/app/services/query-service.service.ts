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

  //Query 5
  public getStudiosFoundationDate(studioName: string, studioLang: string): Observable<any> {
    const query = `
      PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>
      PREFIX wd: <http://www.wikidata.org/entity/>
      PREFIX wdt: <http://www.wikidata.org/prop/direct/>
      PREFIX wikibase: <http://wikiba.se/ontology#>
      PREFIX bd: <http://www.bigdata.com/rdf#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

      select ?studioDate where { 
          ?studio a :Studio .
          ?studio :name ?studioName .
          filter (lang(?studioName) = "${studioLang}") .
          filter (str(?studioName) = "${studioName}") .
          SERVICE <https://query.wikidata.org/sparql> {
              ?studioWD wdt:P31 wd:Q210167 .
              ?studioWD rdfs:label ?studioWDLabel .
              filter (lang(?studioWDLabel) = "en") .
              filter( str(?studioName) = str(?studioWDLabel)) .
              ?studioWD wdt:P571 ?studioDate
          }
      } 
      limit 100 
    `
    const body: HttpParams = new HttpParams().set('query', query)
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

  public getQueryResults(query: string) {
    const body: HttpParams = new HttpParams().set(
      'query', query)
    return this.http.post(this.endpoint, body.toString(), { headers: this.httpHeaders })
  }

}
