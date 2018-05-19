import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import { MyAnimeListService } from '../services/my-anime-list.service';
import { Anime } from '../models/anime.model';
import {trigger, state, style, animate, transition, keyframes, query, stagger} from '@angular/animations';
import { AnimeSearch } from '../models/anime-search.model';

@Component({
  selector: 'app-anime-home',
  templateUrl: './anime-home.component.html',
  styleUrls: ['./anime-home.component.css'],
  animations: [
    trigger('animes', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('500ms', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-35%) ', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true})

      ])
    ])
  ]
})
export class AnimeHomeComponent implements OnInit {

  length: number = 100;
  pageSize: number = 100;
  animes: AnimeSearch[] = [];

  query: string = 'code';

  constructor(private myAnimeList: MyAnimeListService) { }

  ngOnInit() {


    // Observable.of([{name: 'Testing Show', desc: 'Hello'}]).subscribe(animes => {
    //   this.animes = animes;
    // });

    // for(let i = 1; i < 10; i++){
    //   this.myAnimeList.getAnime(i).subscribe(anime => {
    //     this.animes.push(anime)
    //   });
    // }

    this.myAnimeList.getSearchAnime(this.query, 1).subscribe(anime => {
      this.animes = anime.result;
    })

  }

  search(){
    this.myAnimeList.getSearchAnime(this.query, 1).subscribe(anime => {
      this.animes = anime.result;
    })
  }

  updateContent(event){
    
    const tmp_animes: Anime[] = [];
    this.animes = [];
    // for(let i = 1 + (event.pageIndex*10); i < event.pageIndex*event.pageSize + event.pageSize; i++){
    //   this.myAnimeList.getAnime(i).subscribe(anime => {
    //     this.animes.push(anime)
    //   });
    // }
    this.myAnimeList.getSearchAnime(this.query, event.pageIndex+1).subscribe(anime => {
      this.animes = anime.result;
    })



    
    // Observable.of([{name: 'Testing Show', desc: 'Hello'}]).subscribe(animes => {
    //   this.animes = animes;
    // });
  }


}



