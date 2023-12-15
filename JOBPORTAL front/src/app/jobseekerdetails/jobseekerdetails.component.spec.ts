import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerdetailsComponent } from './jobseekerdetails.component';

describe('JobseekerdetailsComponent', () => {
  let component: JobseekerdetailsComponent;
  let fixture: ComponentFixture<JobseekerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
