import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewJournalEntryPage } from './view-journal-entry.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-journal-entry-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule
  ],
  exports: [
    ViewJournalEntryPage
  ],
  declarations: [ViewJournalEntryPage]
})
export class ViewJournalEntryPageModule {}
