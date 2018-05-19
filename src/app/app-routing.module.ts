import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeHomeComponent } from './anime-home/anime-home.component';


const routes: Routes = [
  { path: 'home', component: AnimeHomeComponent},
  { path: 'detail/:id', component: AnimeDetailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
