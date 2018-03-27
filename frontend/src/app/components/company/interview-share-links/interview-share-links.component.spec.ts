import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewShareLinksComponent } from './interview-share-links.component';

describe('InterviewShareLinksComponent', () => {
  let component: InterviewShareLinksComponent;
  let fixture: ComponentFixture<InterviewShareLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewShareLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewShareLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
