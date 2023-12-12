import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/interfaces/partido';
import { PartidosservicesService } from 'src/app/services/partidosservices.service';

@Component({
  selector: 'app-partidospage',
  templateUrl: './partidospage.page.html',
  styleUrls: ['./partidospage.page.scss'],
})
export class PartidospagePage implements OnInit {

  partidos:Partido[]

  constructor(
    private serviPartido:PartidosservicesService
  ) { 
    this.partidos = []
  }

  ngOnInit() {
    this.getPartidos()
  }

  getPartidos(){
    //Nos subscribimos al observable mandado desde el servicio
    this.serviPartido.getPartidos()
      .subscribe(partidos => {
        this.partidos = partidos
      });
  }

}
