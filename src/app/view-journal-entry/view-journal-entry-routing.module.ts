import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewJournalEntryPage } from './view-journal-entry.page';

const routes: Routes = [
  {
    path: '',
    component: ViewJournalEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMessagePageRoutingModule {}
