import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorbondComponent } from './colorbond.component';

describe('ColorbondComponent', () => {
  let component: ColorbondComponent;
  let fixture: ComponentFixture<ColorbondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorbondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorbondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
