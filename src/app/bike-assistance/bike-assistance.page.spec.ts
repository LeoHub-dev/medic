import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikeAssistancePage } from './bike-assistance.page';

describe('BikeAssistancePage', () => {
  let component: BikeAssistancePage;
  let fixture: ComponentFixture<BikeAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeAssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
