import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NoteServerService } from '../service/note.service';
import * as NoteActions from '../actions/note.action';
import { from, map, switchMap, of, catchError } from 'rxjs';
@Injectable()
export class NoteEffects {
  constructor(
    private action$: Actions,
    private noteServices: NoteServerService
  ) {}

  addNote$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.addNote),
      switchMap((action) => from(this.noteServices.addNote(action.note))),
      map(() => NoteActions.addNoteSuccess()),
      catchError((error) => of(NoteActions.addNoteFail({ error: error }))),
    )
  );

  getAllNotes$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.getAllNotes),
      switchMap(() => this.noteServices.getAllNotes()),
      map((notes) => NoteActions.getAllNotesSuccess({ notes })),
      catchError((error) => of(NoteActions.getAllNotesFail({ error: error }))),
    )
  );

  deleteNote$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.deleteNote),
      switchMap((action) => from(this.noteServices.deleteNote(action.id))),
      map(() => NoteActions.deleteNoteSuccess()),
      catchError((error) => of(NoteActions.deleteNoteFail({ error: error }))),
    )
  );
  updateNote$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.updateNote),
      switchMap((action) => from(this.noteServices.updateNote(action.note))),
      map(() => NoteActions.updateNoteSuccess()),
      catchError((error) => of(NoteActions.updateNoteFail({ error: error }))),
    )
  );
}