import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QueryEditorComponent } from './components/query-editor/query-editor.component';
import { QueryTitoliInSagaComponent } from './components/query-titoli-in-saga/query-titoli-in-saga.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuerySagaDatoTitoloComponent } from './components/query-saga-dato-titolo/query-saga-dato-titolo.component';
import { QueryCountGamesInSagaComponent } from './components/query-count-games-in-saga/query-count-games-in-saga.component';
import { QueryStudioDatoTitoloComponent } from './components/query-studio-dato-titolo/query-studio-dato-titolo.component';
import { FindStudioDateComponent } from './components/find-studio-date/find-studio-date.component';
import { FindGameProtagonistComponent } from './components/find-game-protagonist/find-game-protagonist.component';
import { GamesOfSeriesInChronologicOrderComponent } from './components/games-of-series-in-chronologic-order/games-of-series-in-chronologic-order.component';
import { FemaleProtagonistGamesComponent } from './components/female-protagonist-games/female-protagonist-games.component';
import { MutualLoversGamesComponent } from './components/mutual-lovers-games/mutual-lovers-games.component';

const routes: Routes = [{ path: '', component: HomepageComponent }, //Home
{ path: 'editor', component: QueryEditorComponent }, //Editor
{ path: 'query1', component: QueryTitoliInSagaComponent },
{ path: 'query2', component: QuerySagaDatoTitoloComponent },
{ path: 'query3', component: QueryStudioDatoTitoloComponent },
{ path: 'query4', component: QueryCountGamesInSagaComponent },
{ path: 'query5', component: FindStudioDateComponent },
{ path: 'query6', component: FindGameProtagonistComponent },
{ path: 'query7', component: GamesOfSeriesInChronologicOrderComponent },
{ path: 'query8', component: FemaleProtagonistGamesComponent},
{ path: 'query9', component: MutualLoversGamesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
