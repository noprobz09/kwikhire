import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewListsComponent } from './interview-lists.component';

describe('InterviewListsComponent', () => {
  let component: InterviewListsComponent;
  let fixture: ComponentFixture<InterviewListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
