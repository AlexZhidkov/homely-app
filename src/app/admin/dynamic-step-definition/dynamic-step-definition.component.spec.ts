import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStepDefinitionComponent } from './dynamic-step-definition.component';

describe('DynamicStepDefinitionComponent', () => {
  let component: DynamicStepDefinitionComponent;
  let fixture: ComponentFixture<DynamicStepDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicStepDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStepDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
