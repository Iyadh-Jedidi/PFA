import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementEditComponent } from './recrutement-edit.component';

describe('RecrutementEditComponent', () => {
  let component: RecrutementEditComponent;
  let fixture: ComponentFixture<RecrutementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecrutementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrutementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
