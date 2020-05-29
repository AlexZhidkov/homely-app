import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermiteControlSelectionComponent } from './termite-control-selection.component';

describe('TermiteControlSelectionComponent', () => {
  let component: TermiteControlSelectionComponent;
  let fixture: ComponentFixture<TermiteControlSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermiteControlSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermiteControlSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
