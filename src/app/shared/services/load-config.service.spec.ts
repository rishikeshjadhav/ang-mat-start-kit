import { TestBed } from '@angular/core/testing';

import { LoadConfigService } from './load-config.service';

describe('LoadConfigsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadConfigService = TestBed.get(LoadConfigService);
    expect(service).toBeTruthy();
  });
});
