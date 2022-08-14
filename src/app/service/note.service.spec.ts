import { TestBed } from '@angular/core/testing';

import { NoteServerService } from './note.service';

describe('NoteServerService', () => {
  let service: NoteServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});