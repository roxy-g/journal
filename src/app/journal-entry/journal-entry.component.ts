import { Component, OnInit, Input } from '@angular/core';
import {JournalEntry} from '../services/data.service';
import {ModalController} from '@ionic/angular';
import {ViewJournalEntryPage} from '../view-journal-entry/view-journal-entry.page';

@Component({
  selector: 'app-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss'],
})
export class JournalEntryComponent implements OnInit {
  @Input() entry: JournalEntry;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  async viewEntry() {
    const modal = await this.modalCtrl.create({
      component: ViewJournalEntryPage,
      componentProps: {entry: this.entry}
    });
    await modal.present();
  }
}
