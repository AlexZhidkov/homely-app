import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSelectionFormComponent } from './dynamic-selection-form.component';

describe('DynamicSelectionFormComponent', () => {
  let component: DynamicSelectionFormComponent;
  let fixture: ComponentFixture<DynamicSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
