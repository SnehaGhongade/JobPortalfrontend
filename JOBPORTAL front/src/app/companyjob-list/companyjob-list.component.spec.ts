import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyjobListComponent } from './companyjob-list.component';

describe('CompanyjobListComponent', () => {
  let component: CompanyjobListComponent;
  let fixture: ComponentFixture<CompanyjobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyjobListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyjobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
