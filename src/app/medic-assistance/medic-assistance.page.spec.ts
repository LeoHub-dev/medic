import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicAssistancePage } from './medic-assistance.page';

describe('MedicAssistancePage', () => {
  let component: MedicAssistancePage;
  let fixture: ComponentFixture<MedicAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicAssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
