import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJuntasComponent } from './listar-juntas.component';

describe('ListarJuntasComponent', () => {
  let component: ListarJuntasComponent;
  let fixture: ComponentFixture<ListarJuntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarJuntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJuntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
