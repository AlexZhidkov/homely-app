import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofSelectionComponent } from './roof-selection.component';

describe('RoofSelectionComponent', () => {
  let component: RoofSelectionComponent;
  let fixture: ComponentFixture<RoofSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
