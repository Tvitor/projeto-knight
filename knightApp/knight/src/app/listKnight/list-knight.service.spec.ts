import { TestBed } from '@angular/core/testing';

import { ListKnightService } from './list-knight.service';

describe('ListKnightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListKnightService = TestBed.get(ListKnightService);
    expect(service).toBeTruthy();
  });
});
