import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from '../interfaces/partido';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidosservicesService {

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(environment.apiURL + environment.partidos);
  }

  getPartido(id: number): Observable<Partido>{
    return this.http.get<Partido>(environment.apiURL + environment.partidos + id)
  }
}
