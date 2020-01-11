import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TariffsPage } from './tariffs.page';

describe('TariffsPage', () => {
  let component: TariffsPage;
  let fixture: ComponentFixture<TariffsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TariffsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
