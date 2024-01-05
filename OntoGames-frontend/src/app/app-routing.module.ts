import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QueryEditorComponent } from './components/query-editor/query-editor.component';
import { QueryTitoliInSagaComponent } from './components/query-titoli-in-saga/query-titoli-in-saga.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuerySagaDatoTitoloComponent } from './components/query-saga-dato-titolo/query-saga-dato-titolo.component';
import { QueryCountGamesInSagaComponent } from './components/query-count-games-in-saga/query-count-games-in-saga.component';
import { QueryStudioDatoTitoloComponent } from './components/query-studio-dato-titolo/query-studio-dato-titolo.component';

const routes: Routes = [{ path: '', component: HomepageComponent }, //Home
{path:'editor',component:QueryEditorComponent}, //Editor
{path:'query1',component:QueryTitoliInSagaComponent},
{path:'query2',component:QuerySagaDatoTitoloComponent},
{path:'query3',component:QueryStudioDatoTitoloComponent},
{path:'query4',component:QueryCountGamesInSagaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
