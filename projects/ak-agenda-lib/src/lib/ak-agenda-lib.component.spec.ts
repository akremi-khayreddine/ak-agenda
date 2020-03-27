import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkAgendaLibComponent } from './ak-agenda-lib.component';

describe('AkAgendaLibComponent', () => {
  let component: AkAgendaLibComponent;
  let fixture: ComponentFixture<AkAgendaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkAgendaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkAgendaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
