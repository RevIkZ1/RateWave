import { adapter } from '../reducers/animei.reducers';
import { AnimeiState } from './../types/animei.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const selectAnimeiFeature = createFeatureSelector<AnimeiState>('Animei');

// Use this selector for the HeaderComponent
export const headerSelectorLoading = createSelector(
  selectAnimeiFeature,
  (state: AnimeiState) => state.isLoading
);
export const headerSelectorAnime = createSelector(
  selectAnimeiFeature,
  adapter.getSelectors().selectAll
);
export const headerSelectorError = createSelector(
  selectAnimeiFeature,
  (state: AnimeiState) => state.error
);

// Use this selector for the AnimestudioComponent
export const animestudioSelectorLoading = createSelector(
  selectAnimeiFeature,
  (state: AnimeiState) => state.isLoading
);
export const animestudioSelectorAnime = createSelector(
  selectAnimeiFeature,
  adapter.getSelectors().selectAll
);
export const animestudioSelectorError = createSelector(
  selectAnimeiFeature,
  (state: AnimeiState) => state.error
);
export const animeuserSelectorLoading = createSelector(
  selectAnimeiFeature,
  (state: AnimeiState) => state.isLoading
);
export const animeuserSelectorAnime = createSelector(
  selectAnimeiFeature,
  adapter.getSelectors().selectAll
);
export const animeuserSelectorError = createSelector(
  selectAnimeiFeature,
  (state: AnimeiState) => state.error
);
