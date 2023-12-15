import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomejobseekerComponent } from './welcomejobseeker.component';

describe('WelcomejobseekerComponent', () => {
  let component: WelcomejobseekerComponent;
  let fixture: ComponentFixture<WelcomejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomejobseekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
