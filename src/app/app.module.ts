import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MainMaterialModule } from './main-material/main-material.module';


import { HttpClientModule } from '@angular/common/http';
import {MyAnimeListService} from './services/my-anime-list.service';
import { AnimeHomeComponent } from './anime-home/anime-home.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AnimeHomeComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MainMaterialModule,MatPaginatorModule
  ],
  providers: [MyAnimeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
