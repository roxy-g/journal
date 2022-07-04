import { Component, OnInit, ViewChild } from '@angular/core';
import {IonModal} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {DataService, Mood, MOOD_LABEL_MAPPING, NewJournalEntry} from '../services/data.service';

@Component({
  selector: 'app-journal-entry-add',
  templateUrl: './journal-entry-add.component.html',
  styleUrls: ['./journal-entry-add.component.scss'],
})

export class JournalEntryAddComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  user: string;
  mood: Mood;
  message: string;

  public moodLabelMapping = MOOD_LABEL_MAPPING;
  public moods = Object.values(Mood);

  constructor(private data: DataService) {}

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    const entry: NewJournalEntry = {
      date: new Date(),
      user: this.user,
      mood: this.mood,
      message: this.message
    };
    this.modal.dismiss(entry, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<NewJournalEntry>>;
    if (ev.detail.role === 'confirm') {
      this.data.addEntry(ev.detail.data);
    }
  }

  changedEditor(event) {
    if (event.html) {
      this.message = event.html;
    }
  }
}
