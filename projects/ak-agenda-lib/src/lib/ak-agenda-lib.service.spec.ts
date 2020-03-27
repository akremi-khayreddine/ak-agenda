import { TestBed } from '@angular/core/testing';

import { AkAgendaLibService } from './ak-agenda-lib.service';

describe('AkAgendaLibService', () => {
  let service: AkAgendaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkAgendaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
