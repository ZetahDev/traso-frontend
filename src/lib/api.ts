import { API_URL } from './constants';
import type { Candidato, Lider, Votante } from './types';

// Cliente API para candidatos
export const candidatosAPI = {
  async getAll(): Promise<Candidato[]> {
    const response = await fetch(`${API_URL}/personas/candidatos`);
    if (!response.ok) throw new Error('Error al cargar candidatos');
    return response.json();
  },

  async create(data: Partial<Candidato>): Promise<Candidato> {
    const response = await fetch(`${API_URL}/personas/candidatos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al crear candidato');
    }
    return response.json();
  },

  async update(id: string, data: Partial<Candidato>): Promise<Candidato> {
    const response = await fetch(`${API_URL}/personas/candidatos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al actualizar candidato');
    }
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/personas/candidatos/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error al eliminar candidato');
  }
};

// Cliente API para líderes
export const lideresAPI = {
  async getAll(): Promise<Lider[]> {
    const response = await fetch(`${API_URL}/personas/lideres`);
    if (!response.ok) throw new Error('Error al cargar líderes');
    return response.json();
  },

  async create(data: Partial<Lider>): Promise<Lider> {
    const response = await fetch(`${API_URL}/personas/lideres`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al crear líder');
    }
    return response.json();
  },

  async update(id: string, data: Partial<Lider>): Promise<Lider> {
    const response = await fetch(`${API_URL}/personas/lideres/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al actualizar líder');
    }
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/personas/lideres/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error al eliminar líder');
  },

  async assignToCandidato(liderId: string, candidatoId: string): Promise<void> {
    const response = await fetch(`${API_URL}/personas/lideres/${liderId}/assign/${candidatoId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Error al asignar líder a candidato');
  }
};

// Cliente API para votantes
export const votantesAPI = {
  async getAll(): Promise<Votante[]> {
    const response = await fetch(`${API_URL}/personas/votantes`);
    if (!response.ok) throw new Error('Error al cargar votantes');
    return response.json();
  },

  async create(data: Partial<Votante>): Promise<Votante> {
    const response = await fetch(`${API_URL}/personas/votantes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al crear votante');
    }
    return response.json();
  },

  async update(id: string, data: Partial<Votante>): Promise<Votante> {
    const response = await fetch(`${API_URL}/personas/votantes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al actualizar votante');
    }
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/personas/votantes/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error al eliminar votante');
  }
};
