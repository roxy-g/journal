import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { JournalEntryComponentModule } from '../journal-entry/journal-entry.module';
import {JournalEntryAddComponentModule} from '../journal-entry-add/journal-entry-add.module';
import {ViewJournalEntryPageModule} from '../view-journal-entry/view-journal-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalEntryComponentModule,
    JournalEntryAddComponentModule,
    HomePageRoutingModule,
    ViewJournalEntryPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
