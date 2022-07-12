import {Component, Input, OnInit} from '@angular/core';
import {JournalEntry} from '../services/data.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-view-journal-entry',
  templateUrl: './view-journal-entry.page.html',
  styleUrls: ['./view-journal-entry.page.scss'],
})
export class ViewJournalEntryPage implements OnInit {
  @Input() entry: JournalEntry;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit(): void {
  }
}
