// Constantes reutilizables del sistema
export const APP_TITLE = 'Gestión Electoral TRASO';

export const TAB_TITLES = {
  candidatos: '🏛️ Gestión de Candidatos',
  lideres: '👥 Gestión de Líderes',
  votantes: '📋 Registro de Votantes',
  listado: '📊 Listado Completo'
} as const;

export const FORM_LABELS = {
  // Candidatos
  candidato_nombre: 'Nombre Completo',
  candidato_dni: 'DNI',
  candidato_edad: 'Edad',
  candidato_telefono: 'Teléfono',
  candidato_email: 'Email',
  candidato_tipo: 'Tipo de Candidato',
  candidato_partido: 'Partido Político',
  candidato_propuesta: 'Propuesta Electoral',
  
  // Líderes
  lider_nombre: 'Nombre Completo',
  lider_dni: 'DNI',
  lider_edad: 'Edad',
  lider_telefono: 'Teléfono',
  lider_email: 'Email',
  lider_participacion: 'Nivel de Participación',
  lider_candidato: 'Candidato Asignado',
  
  // Votantes
  votante_nombre: 'Nombre Completo',
  votante_dni: 'DNI',
  votante_edad: 'Edad',
  votante_telefono: 'Teléfono',
  votante_lider: 'Líder Asignado',
  votante_mesa: 'Mesa de Sufragio',
  votante_local: 'Local de Votación'
} as const;

export const MESSAGES = {
  success: {
    candidato_created: 'Candidato creado exitosamente',
    candidato_updated: 'Candidato actualizado exitosamente',
    candidato_deleted: 'Candidato eliminado exitosamente',
    lider_created: 'Líder creado exitosamente',
    lider_updated: 'Líder actualizado exitosamente',
    lider_deleted: 'Líder eliminado exitosamente',
    votante_created: 'Votante registrado exitosamente',
    votante_updated: 'Votante actualizado exitosamente',
    votante_deleted: 'Votante eliminado exitosamente'
  },
  error: {
    load_candidatos: 'Error cargando candidatos',
    load_lideres: 'Error cargando líderes',
    load_votantes: 'Error cargando votantes',
    create_candidato: 'Error creando candidato',
    create_lider: 'Error creando líder',
    create_votante: 'Error registrando votante',
    connection: 'Error de conexión con el servidor'
  }
} as const;

export const TIPO_CANDIDATO_OPTIONS = [
  { value: '', label: 'Seleccionar...' },
  { value: 'alcalde', label: 'Alcalde' },
  { value: 'regidor', label: 'Regidor' },
  { value: 'otro', label: 'Otro' }
] as const;

export const API_URL = '/api';

export const API_ENDPOINTS = {
  candidatos: '/personas/candidatos',
  lideres: '/personas/lideres',
  votantes: '/personas/votantes',
  assign_lider: (liderId: string, candidatoId: string) => 
    `/personas/lideres/${liderId}/assign/${candidatoId}`
} as const;

export const APP_CONFIG = {
  name: 'TRASO - Sistema de Gestión Electoral',
  description: 'Sistema para el manejo del fondo público del movimiento TRASO',
  version: '2.0.0',
  author: 'Equipo TRASO',
  baseUrl: process.env.PUBLIC_API_URL || 'http://localhost:3000',
  itemsPerPage: 10,
  maxFileSize: 5 * 1024 * 1024 // 5MB
} as const;
