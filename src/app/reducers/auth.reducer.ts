import { Auth } from '../states/auth.state';
import * as AuthActions from '../actions/auth.action'
import { createReducer,on } from '@ngrx/store';
const initializeApp: Auth = {
  isAuthenticated: false,
  idToken: '',
  error: ''
}

export const authReducer = createReducer(
  initializeApp,
  on(AuthActions.login, state => state),
  on(AuthActions.loginSuccess, (state, action)=> ({
    ...state,
    isAuthenticated: true,
    idToken: action.idToken,
  })),
  on(AuthActions.loginFail, (state, action)=>({
    ...state,
    error: action.error,
  }))
)