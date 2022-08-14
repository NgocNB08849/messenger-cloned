import { idToken } from '@angular/fire/auth';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ idToken: string }>()
);
export const loginFail = createAction(
  '[Auth] Login Fails',
  props<{ error: string }>()
);