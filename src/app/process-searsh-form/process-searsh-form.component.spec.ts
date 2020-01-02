import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSearshFormComponent } from './process-searsh-form.component';

describe('ProcessSearshFormComponent', () => {
  let component: ProcessSearshFormComponent;
  let fixture: ComponentFixture<ProcessSearshFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessSearshFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessSearshFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
