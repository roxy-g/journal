import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewJournalEntryComponent } from './view-journal-entry.component';

const routes: Routes = [
  {
    path: '',
    component: ViewJournalEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMessagePageRoutingModule {}
