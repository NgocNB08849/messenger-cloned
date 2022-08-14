import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import * as authActions from '../actions/auth.action';

@Injectable()
export class authEffects {
  constructor(private action$: Actions, private AuthService: AuthService) {}

  authEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(authActions.login),
      switchMap(() => this.AuthService.login()),
      map((idToken) => authActions.loginSuccess({idToken:idToken})),
      catchError(error => of(authActions.loginFail({error : error})))
    )
  );
}