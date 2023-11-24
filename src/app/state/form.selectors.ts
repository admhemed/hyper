import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectFormState = (state: AppState) => state.form;

export const selectFormValidity = createSelector(
  selectFormState,
  (state) => state.valid
);

export const selectFormData = createSelector(
  selectFormState,
  (formState) => formState.formData
);
