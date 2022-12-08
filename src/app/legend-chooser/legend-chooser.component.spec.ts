import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendChooserComponent } from './legend-chooser.component';

describe('LegendChooserComponent', () => {
  let component: LegendChooserComponent;
  let fixture: ComponentFixture<LegendChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
