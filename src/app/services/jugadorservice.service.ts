import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../interfaces/jugador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadorserviceService {

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(environment.apiURL + environment.jugadores);
  }

  getJugador(id: number): Observable<Jugador>{
    return this.http.get<Jugador>(environment.apiURL + environment.jugadores + id)
  }
 
}
