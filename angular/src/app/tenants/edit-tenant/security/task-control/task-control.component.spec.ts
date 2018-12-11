import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskControlComponent } from './task-control.component';

describe('TaskControlComponent', () => {
  let component: TaskControlComponent;
  let fixture: ComponentFixture<TaskControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
