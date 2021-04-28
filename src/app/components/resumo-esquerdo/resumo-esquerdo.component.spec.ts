import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResumoEsquerdoComponent } from './resumo-esquerdo.component';

describe('ResumoEsquerdoComponent', () => {
  let component: ResumoEsquerdoComponent;
  let fixture: ComponentFixture<ResumoEsquerdoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoEsquerdoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumoEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
