import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectColorState = (state: AppState) => state.color;

export const selectThemeColor = createSelector(
  selectColorState,
  (state) => state.themeColor
);
