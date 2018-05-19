import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyAnimeListService } from '../services/my-anime-list.service';
import { Anime } from '../models/anime.model';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  id: number;
  anime: Anime;

  constructor(private route: ActivatedRoute, private myAnimeList: MyAnimeListService) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this.myAnimeList.getAnime(this.id).subscribe(anime => this.anime = anime);


  }

}
