import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessActivityComponent } from './add-process-activity.component';

describe('AddProcessActivityComponent', () => {
  let component: AddProcessActivityComponent;
  let fixture: ComponentFixture<AddProcessActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
