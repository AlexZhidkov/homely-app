import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormDefinitionComponent } from './dynamic-form-definition.component';

describe('DynamicFormDefinitionComponent', () => {
  let component: DynamicFormDefinitionComponent;
  let fixture: ComponentFixture<DynamicFormDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
