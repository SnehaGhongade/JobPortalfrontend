import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobopeningsComponent } from './jobopenings.component';

describe('JobopeningsComponent', () => {
  let component: JobopeningsComponent;
  let fixture: ComponentFixture<JobopeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobopeningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobopeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
