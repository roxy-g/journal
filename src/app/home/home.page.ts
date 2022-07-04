import { Component } from '@angular/core';
import {DataService, JournalEntry} from '../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getEntries$(): Observable<JournalEntry[]> {
    return this.data.getJournalEntries$();
  }
}
