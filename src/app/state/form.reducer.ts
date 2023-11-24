import { createReducer, on } from '@ngrx/store';
import * as FormActions from './form.actions';
import { FormState, UserFormData } from './app.state';

export const initialFormState: FormState = {
  formData: {
    name: '',
    email: '',
  },
  valid: false,
};

export const formReducer = createReducer(
  initialFormState,
  on(FormActions.updateFormState, (state, { formState }) => ({
    ...state, // Keep existing state
    formData: formState.formData, // Update formData
    valid: formState.valid, // Update validity status
  })),
  on(FormActions.setFormValidity, (state, { valid }) => ({
    ...state,
    valid,
  })),
  on(FormActions.resetFormData, () => initialFormState)
);
