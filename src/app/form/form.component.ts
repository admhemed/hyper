import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as FormActions from '../state/form.actions';
import { Router } from '@angular/router';
import { selectFormData } from '../state/form.selectors';
import * as ColorActions from '../state/color.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.form.valueChanges.subscribe((formState) => {
      console.log('Form value changes', formState);
    });
  }
  ngOnInit() {
    this.store.select(selectFormData).subscribe((formData) => {
      if (formData) {
        this.form.patchValue(formData);
        this.form.markAsDirty();
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
      this.store.dispatch(
        FormActions.updateFormState({
          formState: { formData: this.form.value, valid: true },
        })
      );

      this.navigateToOtherPage();
    }
  }
  private resetTheme() {
    this.store.dispatch(ColorActions.resetColorTheme());
  }

  private navigateToOtherPage() {
    const currentRoute = this.router.url;
    const navigateTo = currentRoute.includes('page-one')
      ? 'page-two'
      : 'page-one';
    this.router.navigate([navigateTo]);
  }

  onReset() {
    this.form.reset();
    this.store.dispatch(FormActions.resetFormData());
    this.resetTheme();
  }

  get isFormPristine(): boolean {
    return this.form.pristine;
  }

  get isFormValid(): boolean {
    return this.form.valid;
  }
}
