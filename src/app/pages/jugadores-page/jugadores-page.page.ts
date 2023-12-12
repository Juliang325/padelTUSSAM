import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/interfaces/jugador';
import { JugadorserviceService } from 'src/app/services/jugadorservice.service';

@Component({
  selector: 'app-jugadores-page',
  templateUrl: './jugadores-page.page.html',
  styleUrls: ['./jugadores-page.page.scss'],
})
export class JugadoresPagePage implements OnInit {

  //Creamos la variable de tipo lista de la interface
  jugadores:Jugador[]

  //Introducimos en el constructor el servicio para poder utilizarlo
  constructor(private serviJugadores:JugadorserviceService) { 
    //Inicializamos a vacio la lista
    this.jugadores = []
  }

  ngOnInit() {
    this.getJugadores()
  }

  //Creamos una funcion que recoja los datos
  getJugadores(){
    //Nos subscribimos al observable mandado desde el servicio
    this.serviJugadores.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);
  }

}
