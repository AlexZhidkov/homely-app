import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickSelectionComponent } from './brick-selection.component';

describe('BrickSelectionComponent', () => {
  let component: BrickSelectionComponent;
  let fixture: ComponentFixture<BrickSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
