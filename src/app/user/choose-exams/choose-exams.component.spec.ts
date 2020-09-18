import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseExamsComponent } from './choose-exams.component';

describe('ChooseExamsComponent', () => {
  let component: ChooseExamsComponent;
  let fixture: ComponentFixture<ChooseExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
