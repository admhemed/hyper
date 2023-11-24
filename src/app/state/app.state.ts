export interface UserFormData {
  name: string;
  email: string;
}

export interface FormState {
  formData: UserFormData;
  valid: boolean;
}

export interface ColorState {
  themeColor: string;
}

export interface AppState {
  color: ColorState;
  form: FormState;
}
