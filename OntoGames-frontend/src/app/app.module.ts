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
import { FindStudioDateComponent } from './components/find-studio-date/find-studio-date.component';
import { MatSelectModule } from '@angular/material/select';
import { FindGameProtagonistComponent } from './components/find-game-protagonist/find-game-protagonist.component';
import { GamesOfSeriesInChronologicOrderComponent } from './components/games-of-series-in-chronologic-order/games-of-series-in-chronologic-order.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryEditorComponent,
    FindStudioDateComponent,
    FindGameProtagonistComponent,
    GamesOfSeriesInChronologicOrderComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
