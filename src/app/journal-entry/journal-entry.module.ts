import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JournalEntryComponent } from './journal-entry.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [JournalEntryComponent],
  exports: [JournalEntryComponent]
})
export class JournalEntryComponentModule {}
