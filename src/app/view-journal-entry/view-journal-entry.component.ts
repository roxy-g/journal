import {Component, Input, OnInit} from '@angular/core';
import {DataService, JournalEntry} from '../services/data.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-view-journal-entry',
  templateUrl: './view-journal-entry.component.html',
  styleUrls: ['./view-journal-entry.component.scss'],
})
export class ViewJournalEntryComponent implements OnInit {
  @Input() entry: JournalEntry;

  constructor(private modalCtrl: ModalController, private data: DataService) {}

  async delete() {
    await this.data.deleteEntry(this.entry.id);
    await this.modalCtrl.dismiss(null, 'deleted');
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit(): void {
  }
}
