import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderHomeComponent } from './builder-home.component';

describe('BuilderHomeComponent', () => {
  let component: BuilderHomeComponent;
  let fixture: ComponentFixture<BuilderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
