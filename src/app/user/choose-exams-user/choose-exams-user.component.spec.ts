import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseExamsUserComponent } from './choose-exams-user.component';

describe('ChooseExamsUserComponent', () => {
  let component: ChooseExamsUserComponent;
  let fixture: ComponentFixture<ChooseExamsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseExamsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseExamsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
