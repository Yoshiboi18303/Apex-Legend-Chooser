import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponComboChooserComponent } from './weapon-combo-chooser.component';

describe('WeaponComboChooserComponent', () => {
  let component: WeaponComboChooserComponent;
  let fixture: ComponentFixture<WeaponComboChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponComboChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponComboChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
