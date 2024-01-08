import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryEditorComponent } from './components/query-editor/query-editor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { QueryTitoliInSagaComponent } from './components/query-titoli-in-saga/query-titoli-in-saga.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuerySagaDatoTitoloComponent } from './components/query-saga-dato-titolo/query-saga-dato-titolo.component';
import { QueryStudioDatoTitoloComponent } from './components/query-studio-dato-titolo/query-studio-dato-titolo.component';
import { QueryCountGamesInSagaComponent } from './components/query-count-games-in-saga/query-count-games-in-saga.component';
import { FindStudioDateComponent } from './components/find-studio-date/find-studio-date.component';
import { MatSelectModule } from '@angular/material/select';
import { FindGameProtagonistComponent } from './components/find-game-protagonist/find-game-protagonist.component';
import { GamesOfSeriesInChronologicOrderComponent } from './components/games-of-series-in-chronologic-order/games-of-series-in-chronologic-order.component';
import { FemaleProtagonistGamesComponent } from './components/female-protagonist-games/female-protagonist-games.component';
import { MutualLoversGamesComponent } from './components/mutual-lovers-games/mutual-lovers-games.component';
import { ResultsListerComponent } from './components/results-lister/results-lister.component';
import { StringifyPipe } from './stringify.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QueryEditorComponent,
    QueryTitoliInSagaComponent,
    HomepageComponent,
    QuerySagaDatoTitoloComponent,
    QueryStudioDatoTitoloComponent,
    QueryCountGamesInSagaComponent,
    FindStudioDateComponent,
    FindGameProtagonistComponent,
    GamesOfSeriesInChronologicOrderComponent,
    FemaleProtagonistGamesComponent,
    MutualLoversGamesComponent,
    ResultsListerComponent,
    StringifyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
