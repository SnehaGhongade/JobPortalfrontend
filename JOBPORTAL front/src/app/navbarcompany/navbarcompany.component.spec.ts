import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcompanyComponent } from './navbarcompany.component';

describe('NavbarcompanyComponent', () => {
  let component: NavbarcompanyComponent;
  let fixture: ComponentFixture<NavbarcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
