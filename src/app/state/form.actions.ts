import { createAction, props } from '@ngrx/store';
import { FormState } from './app.state';

export const updateFormState = createAction(
  '[Form Component] Update Form State',
  props<{ formState: FormState }>()
);

export const setFormValidity = createAction(
  '[Form Component] Set Form Validity',
  props<{ valid: boolean }>()
);

export const resetFormData = createAction('[Form Component] Reset Form Data');
