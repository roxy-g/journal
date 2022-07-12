import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewJournalEntryPageModule } from './view-journal-entry.module';

import { ViewJournalEntryComponent } from './view-journal-entry.page';

describe('ViewJournalEntryPage', () => {
  let component: ViewJournalEntryComponent;
  let fixture: ComponentFixture<ViewJournalEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJournalEntryComponent ],
      imports: [IonicModule.forRoot(), ViewJournalEntryPageModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
