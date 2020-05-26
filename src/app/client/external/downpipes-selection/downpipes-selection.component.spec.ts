import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownpipesSelectionComponent } from './downpipes-selection.component';

describe('DownpipesSelectionComponent', () => {
  let component: DownpipesSelectionComponent;
  let fixture: ComponentFixture<DownpipesSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownpipesSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownpipesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
