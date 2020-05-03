import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundSlabSelectionComponent } from './ground-slab-selection.component';

describe('GroundSlabSelectionComponent', () => {
  let component: GroundSlabSelectionComponent;
  let fixture: ComponentFixture<GroundSlabSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundSlabSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundSlabSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
