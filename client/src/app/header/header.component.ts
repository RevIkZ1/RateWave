import { Component, OnInit } from '@angular/core';
import { Observable, defaultIfEmpty } from 'rxjs';
import { Anime } from '../store/types/anime.module';
import { Store } from '@ngrx/store';
import { AnimeState } from '../store/types/anime.interface';
import { AnimeService } from '../services/anime.service';
import {
  headerSelectorLoading,
  headerSelectorError,
  headerSelectorAnime,
} from '../store/selectors/animei.selector';
import * as AnimeiActions from '../store/actions/animei.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoading$?: Observable<boolean>;
  error$?: Observable<string | null>;
  anime$?: Observable<Anime[]>;
  searchText: string = '';
  constructor(
    private animeService: AnimeService,
    private store: Store<AnimeState>
  ) {
    this.isLoading$ = this.store.select(headerSelectorLoading);
    this.error$ = this.store.select(headerSelectorError);
    this.anime$ = this.store.select(headerSelectorAnime);
  }

  ngOnInit(): void {
    this.store.dispatch(AnimeiActions.getAnimei());
  }
  prikazi() {
    this.anime$?.subscribe((res) => {
      console.log(res);
    });
  }
  getBackgroundStyle(imageUrl: string) {
    return {
      'background-image': `url(${imageUrl})`,
    };
  }
}
