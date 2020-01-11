import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepatriationAssistancePage } from './repatriation-assistance.page';

describe('RepatriationAssistancePage', () => {
  let component: RepatriationAssistancePage;
  let fixture: ComponentFixture<RepatriationAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepatriationAssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepatriationAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
