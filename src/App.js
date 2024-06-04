import React, { useState } from 'react';
import axios from 'axios';
import FormularioBusqueda from './componentes/FormularioBusqueda';
import ListaFacts from './componentes/ListaFacts';
import ListaFavoritos from './componentes/ListaFavoritos';
import './styles.css'; // Importar los estilos

const App = () => {
  const [facts, setFacts] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  const manejarBusqueda = async (consulta) => {
    try {
      const respuesta = await axios.get(`https://api.chucknorris.io/jokes/search?query=${consulta}`);
      if (respuesta.status === 200) {
        setFacts(respuesta.data.result);
      }
    } catch (error) {
      alert('Error al obtener los hechos');
    }
  };

  const manejarLike = (fact) => {
    setFavoritos([...favoritos, fact]);
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/chuck-norris.png" alt="Chuck Norris" />
      </div>
      <FormularioBusqueda onBuscar={manejarBusqueda} />
      <button onClick={() => setMostrarFavoritos(!mostrarFavoritos)}>
        {mostrarFavoritos ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
      </button>
      {mostrarFavoritos ? (
        <ListaFavoritos favoritos={favoritos} />
      ) : (
        <ListaFacts facts={facts} onLike={manejarLike} />
      )}
    </div>
  );
};

export default App;
