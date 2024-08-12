import React, { useEffect, useState } from 'react';
import { getTurnos } from '../api';

const Servicios = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const data = await getTurnos();
        setTurnos(data);
      } catch (error) {
        console.error('Error al obtener turnos:', error);
      }
    };
    fetchTurnos();
  }, []);

  return (
    <div>
      <h1>Servicios Médicos</h1>
      <ul>
        {turnos.map(turno => (
          <li key={turno.id}>{`${turno.fecha} - ${turno.hora}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Servicios;
