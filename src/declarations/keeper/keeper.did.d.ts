import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : ActorMethod<[string, string], undefined>,
  'readNotes' : ActorMethod<[], Array<Note>>,
  'removeNotes' : ActorMethod<[bigint], undefined>,
}
