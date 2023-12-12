import { Jugador } from "./jugador";

export interface Partido {
    resultado: string,
    recinto: string,
    jugadores: Jugador[]
}
