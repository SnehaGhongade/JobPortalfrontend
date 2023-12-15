import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarjobseekerComponent } from './navbarjobseeker.component';

describe('NavbarjobseekerComponent', () => {
  let component: NavbarjobseekerComponent;
  let fixture: ComponentFixture<NavbarjobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarjobseekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
