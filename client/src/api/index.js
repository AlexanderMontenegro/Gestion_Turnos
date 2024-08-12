import axios from 'axios';

const API_URL = '/api';

export const getTurnos = async () => {
  try {
    const response = await axios.get(`${API_URL}/turnos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener turnos:', error);
    throw error;
  }
};

export const solicitarTurno = async (turnoData) => {
  try {
    const response = await axios.post(`${API_URL}/turnos`, turnoData);
    return response.data;
  } catch (error) {
    console.error('Error al solicitar turno:', error);
    throw error;
  }
};

export const getServicios = async () => {
  try {
    const response = await axios.get(`${API_URL}/servicios`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
