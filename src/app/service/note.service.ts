import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
@Injectable({
  providedIn: 'root'
})
export class NoteServerService {

  constructor(
    private Http: HttpClient
  ) { }

  getAllNotes():Observable<Note[]>{
    return this.Http.get<Note[]>(`http://localhost:3000/note/all`);
  }
  getNoteById(id:string):Observable<Note[]>{
    return this.Http.get<Note[]>(`http://localhost:3000/note/?id=${id}`+id);
  }
  addNote(note:Note):Observable<Note[]>{
    return this.Http.post<Note[]>(`http://localhost:3000/note/`,note);
  }
  updateNote(note:Note):Observable<Note[]>{
    return this.Http.put<Note[]>(`http://localhost:3000/note/`,note);
  }
  deleteNote(id:string):Observable<Note[]>{
    return this.Http.delete<Note[]>(`http://localhost:3000/note/?id=`+id);
  }
}