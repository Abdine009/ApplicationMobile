import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfficheMoyennePage } from './affiche-moyenne.page';

describe('AfficheMoyennePage', () => {
  let component: AfficheMoyennePage;
  let fixture: ComponentFixture<AfficheMoyennePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheMoyennePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfficheMoyennePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
