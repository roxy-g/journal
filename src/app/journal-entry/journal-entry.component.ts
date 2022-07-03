import { Component, OnInit, Input } from '@angular/core';
import {JournalEntry} from '../services/data.service';

@Component({
  selector: 'app-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss'],
})
export class JournalEntryComponent implements OnInit {
  @Input() entry: JournalEntry;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
