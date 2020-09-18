import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpannelhomeComponent } from './adminpannelhome.component';

describe('AdminpannelhomeComponent', () => {
  let component: AdminpannelhomeComponent;
  let fixture: ComponentFixture<AdminpannelhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpannelhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpannelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
