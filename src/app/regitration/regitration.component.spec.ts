import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitrationComponent } from './regitration.component';

describe('RegitrationComponent', () => {
  let component: RegitrationComponent;
  let fixture: ComponentFixture<RegitrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegitrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
