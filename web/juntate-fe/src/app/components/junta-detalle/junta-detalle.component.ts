import { Component, OnInit } from '@angular/core';

import { JuntaService } from '../../services/junta.service';
import { Aggroupment as Junta } from '../../models/aggroupment';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-junta-detalle',
  templateUrl: './junta-detalle.component.html',
  styleUrls: ['./junta-detalle.component.css'],
  providers: [JuntaService]
})
export class JuntaDetalleComponent implements OnInit {
  junta: Junta;
  constructor(private juntaService: JuntaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJunta();
  }

  getJunta() {
    this.juntaService
      .getJunta(this.route.snapshot.params["id"])
      .subscribe(response => {
        this.junta = response;
      });
  }

}
