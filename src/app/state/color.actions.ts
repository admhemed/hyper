import { createAction, props } from '@ngrx/store';

export const changeColorTheme = createAction(
  '[Theme] Change Color Theme',
  props<{ color: string }>()
);

export const resetColorTheme = createAction('[Theme] Reset Color Theme');
