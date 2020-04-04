import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSectionComponent } from './external-section.component';

describe('ExternalSectionComponent', () => {
  let component: ExternalSectionComponent;
  let fixture: ComponentFixture<ExternalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
