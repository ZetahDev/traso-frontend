// Tipos de datos para el sistema electoral
export interface Candidato {
  id: string;
  nombre: string;
  dni?: string;
  edad?: number;
  telefono?: string;
  email?: string;
  tipo_candidato?: 'alcalde' | 'regidor' | 'otro';
  partido_politico?: string;
  propuesta_electoral?: string;
}

export interface Lider {
  id: string;
  nombre: string;
  dni?: string;
  edad?: number;
  telefono?: string;
  email?: string;
  nivel_participacion?: string;
  candidato_id?: string;
  candidato_nombre?: string;
}

export interface Votante {
  id: string;
  nombre: string;
  dni?: string;
  edad?: number;
  telefono: string;
  lider_id: string;
  mesa_sufragio?: string;
  local_votacion?: string;
  lider_nombre?: string;
  candidato_nombre?: string;
  candidato_id?: string;
}

export interface VotanteConInfo extends Votante {
  lider_nombre: string;
  candidato_nombre: string;
}
