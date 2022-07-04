import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService, JournalEntry} from '../services/data.service';

@Component({
  selector: 'app-view-journal-entry',
  templateUrl: './view-journal-entry.page.html',
  styleUrls: ['./view-journal-entry.page.scss'],
})
export class ViewJournalEntryPage implements OnInit {
  public entry: JournalEntry;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.entry = this.data.getJournalEntryById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
