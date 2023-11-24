import { ActionReducerMap } from '@ngrx/store';
import * as fromColor from './color.reducer';
import * as fromForm from './form.reducer';
import { AppState } from './app.state';

export const appReducer: ActionReducerMap<AppState> = {
  color: fromColor.colorReducer,
  form: fromForm.formReducer,
};
