import { NoteState } from './states/note.state';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NoteServerService } from './service/note.service';
import * as NoteActions from './actions/note.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-note';
  searchText: any;
  form!: FormGroup;
  noteState$ = this.store.select('note');
  note$ = this.store.select((state) => state.note.notes);
  constructor(
    private formBuilder: FormBuilder,
    private noteServerService: NoteServerService,
    private store: Store<{ note: NoteState }>
  ) {
    this.form = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.noteState$.subscribe((state) => {
      console.log(state);
    });
    this.store.dispatch(NoteActions.getAllNotes());
  }


  addNote() {
    console.log('aaaaaaaaa');
    let newForm = {
      ...this.form.value,
    };
    this.store.dispatch(NoteActions.addNote({ note: newForm }));
    this.form.reset(this.form);
    this.store.dispatch(NoteActions.getAllNotes());
  }
  deleteNote(id: string) {
    console.log('aaaaaaaaaa');
    this.store.dispatch(NoteActions.deleteNote({ id }));
    //window.location.reload();
  }
}
