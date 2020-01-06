import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMethodMappingComponent } from './add-method-mapping.component';

describe('AddMethodMappingComponent', () => {
  let component: AddMethodMappingComponent;
  let fixture: ComponentFixture<AddMethodMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMethodMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMethodMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
