import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
  constructor(
    private serviJugadores:JugadorserviceService,
    private loadingCtrl: LoadingController) { 
    //Inicializamos a vacio la lista
    this.jugadores = []
  }

  ngOnInit() {
    this.getJugadores()
  }

  //Creamos una funcion que recoja los datos
  getJugadores(){
    //Antes de cargar los jugadores se mostrará el simbolo de espera
    this.showLoading();
    //Nos subscribimos al observable mandado desde el servicio
    this.serviJugadores.getJugadores()
      .subscribe(jugadores => {
        // Ordenar los jugadores por puntos de forma descendente
        jugadores.sort((a, b) => b.puntos - a.puntos);
        this.jugadores = jugadores;
      });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'cargando jugadores...',
    });
 
 
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000); // Duración de dos segundos en milisegundos
  }
 

}


