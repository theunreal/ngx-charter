import { TestBed } from '@angular/core/testing';

import { ChartsService } from './charts.service';

describe('NgxChartjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartsService = TestBed.get(ChartsService);
    expect(service).toBeTruthy();
  });
});
