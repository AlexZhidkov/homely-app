import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseConfigComponent } from './house-config.component';

describe('HouseConfigComponent', () => {
  let component: HouseConfigComponent;
  let fixture: ComponentFixture<HouseConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
