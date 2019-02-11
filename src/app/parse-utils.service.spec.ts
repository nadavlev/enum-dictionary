import { TestBed } from '@angular/core/testing';

import { ParseUtilsService } from './parse-utils.service';

describe('ParseUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseUtilsService = TestBed.get(ParseUtilsService);
    expect(service).toBeTruthy();
  });
});
