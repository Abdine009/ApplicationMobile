import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfficheNoteDetailPage } from './affiche-note-detail.page';

describe('AfficheNoteDetailPage', () => {
  let component: AfficheNoteDetailPage;
  let fixture: ComponentFixture<AfficheNoteDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheNoteDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfficheNoteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
