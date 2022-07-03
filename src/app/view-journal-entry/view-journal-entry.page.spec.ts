import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewJournalEntryPageModule } from './view-journal-entry.module';

import { ViewJournalEntryPage } from './view-journal-entry.page';

describe('ViewJournalEntryPage', () => {
  let component: ViewJournalEntryPage;
  let fixture: ComponentFixture<ViewJournalEntryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJournalEntryPage ],
      imports: [IonicModule.forRoot(), ViewJournalEntryPageModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewJournalEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
