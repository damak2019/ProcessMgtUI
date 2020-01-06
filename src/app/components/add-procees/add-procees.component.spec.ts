import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProceesComponent } from './add-procees.component';

describe('AddProceesComponent', () => {
  let component: AddProceesComponent;
  let fixture: ComponentFixture<AddProceesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProceesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProceesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
