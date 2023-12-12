import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/interfaces/jugador';
import { JugadorserviceService } from 'src/app/services/jugadorservice.service';

@Component({
  selector: 'app-detalle-page',
  templateUrl: './detalle-page.page.html',
  styleUrls: ['./detalle-page.page.scss'],
})
export class DetallePagePage implements OnInit {

  //Creamos la variable id que será donde almacemos el id que recogemos de la pagina jugadores
  id:any;
  //Craemos la varialbe jugador de tipo jugador
  jugador:Jugador;

  constructor(
    //Volvemos a implementar los servicios necesarios
    private serviJugador : JugadorserviceService, 
    //Clase necesaria para recuperar el id
    private activateRoute: ActivatedRoute,
  ) {  
    this.jugador = {} as Jugador;
   }

  ngOnInit() {
    //Recuperamos el id y lo pasamos number
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    //Nos subscribimos al observable enviado del metodo del servicio
    this.serviJugador.getJugador(Number(this.id)).subscribe(jugador => {
      this.jugador = jugador;
    });
  }

}
