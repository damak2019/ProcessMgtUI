import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSearshingFormComponent } from './process-searshing-form.component';

describe('ProcessSearshingFormComponent', () => {
  let component: ProcessSearshingFormComponent;
  let fixture: ComponentFixture<ProcessSearshingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessSearshingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessSearshingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
