import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexamsComponent } from './addexams.component';

describe('AddexamsComponent', () => {
  let component: AddexamsComponent;
  let fixture: ComponentFixture<AddexamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
