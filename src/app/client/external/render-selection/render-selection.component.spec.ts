import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderSelectionComponent } from './render-selection.component';

describe('RenderSelectionComponent', () => {
  let component: RenderSelectionComponent;
  let fixture: ComponentFixture<RenderSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
