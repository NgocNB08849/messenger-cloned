import { createReducer, on } from '@ngrx/store';
import { NoteState } from '../states/note.state';
import * as NoteActions from '../actions/note.action';

const initialState: NoteState = {
  notes: [],
  error: '',
  isLoading: false,
};

export const noteReducer = createReducer(
  initialState,
  //POST
  on(NoteActions.addNote, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.addNoteSuccess, (state) => {
    console.log(state)
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(NoteActions.addNoteFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  //GET
  on(NoteActions.getAllNotes, (state) => {
    console.log(state)
    return {
      ...state,
      isLoading: true,
    };

  }),
  on(NoteActions.getAllNotesSuccess, (state, { notes }) => {
    return {
      ...state,
      isLoading: false,
      notes: notes,
    };
  }),
  on(NoteActions.getAllNotesFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  //DELETE
  on(NoteActions.deleteNote, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.deleteNoteSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(NoteActions.deleteNoteFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  //PUT
  on(NoteActions.updateNote, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.updateNoteSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(NoteActions.updateNoteFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  })
);