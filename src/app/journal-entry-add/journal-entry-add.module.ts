import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JournalEntryAddComponent } from './journal-entry-add.component';
import {QuillModule} from 'ngx-quill';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, QuillModule.forRoot()],
  declarations: [JournalEntryAddComponent],
  exports: [JournalEntryAddComponent]
})
export class JournalEntryAddComponentModule {}
