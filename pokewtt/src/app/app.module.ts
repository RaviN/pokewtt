import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleListComponent } from './example-list/example-list.component';
import { TradeListItemComponent } from './trade-list-item/trade-list-item.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoveComponent } from './move/move.component';
import { LevelHemiComponent } from './level-hemi/level-hemi.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleListComponent,
    TradeListItemComponent,
    MoveComponent,
    LevelHemiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
