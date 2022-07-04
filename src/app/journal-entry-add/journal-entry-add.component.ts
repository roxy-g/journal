import { Component, OnInit, ViewChild } from '@angular/core';
import {IonModal} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {Mood, MOOD_LABEL_MAPPING} from '../services/data.service';

@Component({
  selector: 'app-journal-entry-add',
  templateUrl: './journal-entry-add.component.html',
  styleUrls: ['./journal-entry-add.component.scss'],
})

export class JournalEntryAddComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  user: string;
  mood: Mood;
  public moodLabelMapping = MOOD_LABEL_MAPPING;
  public moods = Object.values(Mood);

  constructor() { }

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.user, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log('dismiss');
    }
  }

  changedEditor(event) {
    console.log('editor-change', event.html);
  }
}
