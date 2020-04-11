import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsDoorsSelectionComponent } from './windows-doors-selection.component';

describe('WindowsDoorsSelectionComponent', () => {
  let component: WindowsDoorsSelectionComponent;
  let fixture: ComponentFixture<WindowsDoorsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsDoorsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsDoorsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
