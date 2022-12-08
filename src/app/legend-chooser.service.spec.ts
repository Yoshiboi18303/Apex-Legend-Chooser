import { TestBed } from '@angular/core/testing';

import { LegendChooserService } from './legend-chooser.service';

describe('LegendChooserService', () => {
  let service: LegendChooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegendChooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
