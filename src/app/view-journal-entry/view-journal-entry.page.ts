import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {JournalEntry} from '../services/data.service';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-view-journal-entry',
  templateUrl: './view-journal-entry.page.html',
  styleUrls: ['./view-journal-entry.page.scss'],
})
export class ViewJournalEntryPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @Input() entry: JournalEntry;

  constructor() { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  ngOnInit(): void {
  }
}
