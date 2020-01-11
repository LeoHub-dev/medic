import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetAssistancePage } from './pet-assistance.page';

describe('PetAssistancePage', () => {
  let component: PetAssistancePage;
  let fixture: ComponentFixture<PetAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetAssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
