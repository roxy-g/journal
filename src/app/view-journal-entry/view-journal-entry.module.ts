import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewJournalEntryComponent } from './view-journal-entry.component';

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
    ViewJournalEntryComponent
  ],
  declarations: [ViewJournalEntryComponent]
})
export class ViewJournalEntryPageModule {}
