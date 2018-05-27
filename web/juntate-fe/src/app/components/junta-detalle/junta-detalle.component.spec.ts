import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntaDetalleComponent } from './junta-detalle.component';

describe('JuntaDetalleComponent', () => {
  let component: JuntaDetalleComponent;
  let fixture: ComponentFixture<JuntaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuntaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
