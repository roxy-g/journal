import { Injectable } from '@angular/core';

export interface JournalEntry {
  id: number;
  date: Date;
  user: string;
  mood: Mood;
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

const testMessage = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
  'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
  'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ' +
  'est laborum.';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public entries: JournalEntry[] = [
    {
      id: 1,
      date: new Date('2022-07-02T11:19:44.434Z'),
      user: 'Ksenia',
      mood: Mood.happy,
      message: testMessage
    },
    {
      id: 2,
      date: new Date('2022-07-01T20:50:44.434Z'),
      user: 'Bob',
      mood: Mood.awful,
      message: testMessage
    },    {
      id: 3,
      date: new Date('2022-07-01T09:15:00.000Z'),
      user: 'Ksenia',
      mood: Mood.good,
      message: testMessage
    },    {
      id: 4,
      date:  new Date('2022-07-01T09:15:00.000Z'),
      user: 'Ksenia',
      mood: Mood.meh,
      message: testMessage
    },    {
      id: 5,
      date: new Date('2022-06-30T23:58:00.000Z'),
      user: 'Bob',
      mood: Mood.bad,
      message: testMessage
    }
  ];

  constructor() { }

  public getJournalEntries(): JournalEntry[] {
    return this.entries;
  }
  public getJournalEntryById(id: number): JournalEntry {
    return this.entries.find(entry => entry.id === id);
  }

  public addEntry(newEntry: NewJournalEntry) {
    this.entries.push({id: this.entries.length + 1, ...newEntry});
  }
}
