import { TestBed } from '@angular/core/testing';

import { InterviewStatusService } from './interview-status.service';

describe('InterviewStatusService', () => {
  let service: InterviewStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
