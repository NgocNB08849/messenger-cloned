import { createAction, props } from "@ngrx/store";
import { Note } from "../models/note.model";

//POST
export const addNote = createAction(
  '[Note] Add Note',
  props<{ note: Note }>()
);

export const addNoteSuccess = createAction(
  '[Note] Add Note Success',
);

export const addNoteFail = createAction(
  '[Note] Add Note Fail',
  props<{ error: string }>()
);

//GET
export const getAllNotes = createAction(
  '[Note] Get All Notes',
);

export const getAllNotesSuccess = createAction(
  '[Note] Get All Notes Success',
  props<{ notes: Note[] }>()
);

export const getAllNotesFail = createAction(
  '[Note] Get All Notes Fail',
  props<{ error: string }>()
);

//DELTE
export const deleteNote = createAction(
  '[Note] Delete Note',
  props<{ id: string }>()
)
export const deleteNoteSuccess = createAction(
  '[Note] Delete Note Success',
);
export const deleteNoteFail = createAction(
  '[Note] Delete Note Fail',
  props<{ error: string }>()
);

//PUT
export const updateNote = createAction(
  '[Note] Update Note',
  props<{ note: Note }>()
);
export const updateNoteSuccess = createAction(
  '[Note] Update Note Success',
);
export const updateNoteFail = createAction(
  '[Note] Update Note Fail',
  props<{ error: string }>()
);