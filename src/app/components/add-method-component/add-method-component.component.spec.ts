import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMethodComponentComponent } from './add-method-component.component';

describe('AddMethodComponentComponent', () => {
  let component: AddMethodComponentComponent;
  let fixture: ComponentFixture<AddMethodComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMethodComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMethodComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
