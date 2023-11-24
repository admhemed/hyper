import { createReducer, on } from '@ngrx/store';
import * as ColorActions from './color.actions';
import { ColorState } from './app.state';

export const initialState: ColorState = {
  themeColor: '#f8f800', // Default color
};

export const colorReducer = createReducer(
  initialState,
  on(ColorActions.changeColorTheme, (state, { color }) => ({
    ...state,
    themeColor: color,
  })),
  on(ColorActions.resetColorTheme, () => ({
    ...initialState,
  }))
);
