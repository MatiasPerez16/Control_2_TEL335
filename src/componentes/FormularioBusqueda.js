import React, { useState } from 'react';

const FormularioBusqueda = ({ onBuscar }) => {
  const [consulta, setConsulta] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    onBuscar(consulta);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={consulta}
        onChange={(e) => setConsulta(e.target.value)}
        placeholder="Buscar un hecho de Chuck Norris"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default FormularioBusqueda;
