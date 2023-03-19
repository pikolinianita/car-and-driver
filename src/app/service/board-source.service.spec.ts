import { TestBed } from '@angular/core/testing';

import { BoardSourceService } from './board-source.service';

describe('BoardSourceService', () => {
  let service: BoardSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
