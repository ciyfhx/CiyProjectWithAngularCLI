import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Anime } from '../models/anime.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { AnimeSearchArray } from '../models/anime-search.model';


@Injectable()
export class MyAnimeListService {
  
  readonly BASE_URL = 'https://api.jikan.me/';

  constructor(private http: HttpClient) {
  }

  getAnime(id: number){
    return this.http.get<Anime>(this.BASE_URL + 'anime/' + id);
  }

  getSearchAnime(query: string, pageIndex: number){
    return this.http.get<AnimeSearchArray>(this.BASE_URL + `search/anime/${query}/${pageIndex}`);
  }


}