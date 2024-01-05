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

@NgModule({
  declarations: [
    AppComponent,
    QueryEditorComponent,
    QueryTitoliInSagaComponent,
    HomepageComponent,
    QuerySagaDatoTitoloComponent,
    QueryStudioDatoTitoloComponent,
    QueryCountGamesInSagaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
