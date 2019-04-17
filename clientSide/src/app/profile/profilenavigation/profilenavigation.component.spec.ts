import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilenavigationComponent } from './profilenavigation.component';

describe('ProfilenavigationComponent', () => {
  let component: ProfilenavigationComponent;
  let fixture: ComponentFixture<ProfilenavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilenavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
