import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCardComponent } from './selection-card.component';

describe('SelectionCardComponent', () => {
  let component: SelectionCardComponent;
  let fixture: ComponentFixture<SelectionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
