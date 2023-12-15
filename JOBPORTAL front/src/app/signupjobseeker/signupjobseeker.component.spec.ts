import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupjobseekerComponent } from './signupjobseeker.component';

describe('SignupjobseekerComponent', () => {
  let component: SignupjobseekerComponent;
  let fixture: ComponentFixture<SignupjobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupjobseekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
