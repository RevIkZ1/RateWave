import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AnimeModel } from '../types/anime.module';
import { createReducer, on } from '@ngrx/store';
import * as animeiActions from '../actions/animei.actions';
import { AnimeiState } from '../types/animei.interface';
import * as animeActions from '../actions/anime.actions';

export const adapter: EntityAdapter<AnimeModel> =
  createEntityAdapter<AnimeModel>();

export const initialState: AnimeiState = adapter.getInitialState({
  isLoading: false,
  error: null,
  update: false,
});
export const reducers5 = createReducer(
  initialState,
  on(animeiActions.getAnimei, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(animeiActions.getAnimeiSuccess, (state, action) => {
    return adapter.addMany(action.mesta, { ...state, isLoading: false });
  }),
  on(animeiActions.getAnimeiFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(animeiActions.getAnimeForStudio, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(animeiActions.getAnimeForStudioSuccess, (state, action) => {
    return adapter.setAll(action.mesta, { ...state, isLoading: false });
  }),
  on(animeiActions.getAnimeForStudioFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(animeiActions.getAnimeForUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(animeiActions.getAnimeForUserSuccess, (state, action) => {
    return adapter.setAll(action.mesta, { ...state, isLoading: false });
  }),
  on(animeiActions.getAnimeForUserFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(animeActions.postAnime, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(animeActions.postAnimeSuccess, (state, action) => {
    return adapter.addOne(action.anime, { ...state, isLoading: false });
  })
);
