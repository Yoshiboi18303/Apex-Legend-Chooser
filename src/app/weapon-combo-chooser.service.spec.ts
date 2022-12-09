import { TestBed } from '@angular/core/testing';

import { WeaponComboChooserService } from './weapon-combo-chooser.service';

describe('WeaponComboChooserService', () => {
  let service: WeaponComboChooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponComboChooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
