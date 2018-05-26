import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAggroupmentComponent } from './create-aggroupment.component';

describe('CreateAggroupmentComponent', () => {
  let component: CreateAggroupmentComponent;
  let fixture: ComponentFixture<CreateAggroupmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAggroupmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAggroupmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
