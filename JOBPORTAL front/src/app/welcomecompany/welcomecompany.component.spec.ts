import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecompanyComponent } from './welcomecompany.component';

describe('WelcomecompanyComponent', () => {
  let component: WelcomecompanyComponent;
  let fixture: ComponentFixture<WelcomecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomecompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
