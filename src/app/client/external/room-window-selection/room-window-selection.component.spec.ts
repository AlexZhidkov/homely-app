import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWindowSelectionComponent } from './room-window-selection.component';

describe('RoomWindowSelectionComponent', () => {
  let component: RoomWindowSelectionComponent;
  let fixture: ComponentFixture<RoomWindowSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomWindowSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWindowSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
