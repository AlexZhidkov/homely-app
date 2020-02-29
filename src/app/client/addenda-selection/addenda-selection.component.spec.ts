import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddendaSelectionComponent } from './addenda-selection.component';

describe('AddendaSelectionComponent', () => {
  let component: AddendaSelectionComponent;
  let fixture: ComponentFixture<AddendaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddendaSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddendaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
