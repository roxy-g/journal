import { Injectable } from '@angular/core';
import {Timestamp} from '@angular/fire/firestore';
import {map, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

export interface JournalEntry {
  id: string;
  date: Date;
  user: string;
  mood: Mood;
  message: string;
}

export interface JournalEntity {
  id?: string;
  date: Timestamp;
  user: string;
  mood: string;
  message: string;
}

export type NewJournalEntry = Omit<JournalEntry, 'id'>;

export enum Mood {
  happy = 'happy',
  good = 'good',
  meh = 'meh',
  bad = 'bad',
  awful = 'awful'
}

export const MOOD_LABEL_MAPPING: Record<Mood, string> = {
  [Mood.happy]: 'Happy',
  [Mood.good]: 'Good',
  [Mood.meh]: 'Meh',
  [Mood.bad]: 'Bad',
  [Mood.awful]: 'Awful'
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected entries$: Observable<JournalEntry[]>;
  private entryCollection: AngularFirestoreCollection<JournalEntity>;

  constructor(private afs: AngularFirestore) {
    this.entryCollection = afs.collection<JournalEntity>('journalEntry');
    this.entries$ = this.entryCollection.valueChanges().pipe(map(docs => docs.map(d => ({
      id: d.id,
      user: d.user,
      message: d.message,
      mood: Mood[d.mood],
      date: (d.date as Timestamp).toDate()})
    )));
  }

  public getJournalEntries$(): Observable<JournalEntry[]> {
    return this.entries$;
  }

  public addEntry(newEntry: NewJournalEntry) {
    this.entryCollection.add({
      user: newEntry.user,
      message: newEntry.message,
      mood: newEntry.mood,
      date: Timestamp.fromDate(newEntry.date)
    });
  }
}
