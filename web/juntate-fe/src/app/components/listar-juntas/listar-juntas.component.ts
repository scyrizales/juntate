import { Component, OnInit } from '@angular/core';

import { JuntaService } from '../../services/junta.service';
import { Junta } from '../../models/junta';

@Component({
  selector: 'app-listar-juntas',
  templateUrl: './listar-juntas.component.html',
  styleUrls: ['./listar-juntas.component.css'],
  providers: [JuntaService]
})
export class ListarJuntasComponent implements OnInit {

  private juntas: Junta[];

  constructor(private juntaService: JuntaService) { }

  getJuntas() {
    this.juntaService
      .getJuntas()
      .subscribe(response => {
        this.juntas = response;
      });
  }

  ngOnInit() {
    this.getJuntas();
  }

}
