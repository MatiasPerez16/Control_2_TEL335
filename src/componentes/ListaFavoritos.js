import React from 'react';
import { format } from 'date-fns';

const ListaFavoritos = ({ favoritos }) => {
  return (
    <div>
      {favoritos.length === 0 ? (
        <p>No tienes favoritos aún.</p>
      ) : (
        favoritos.map(fact => {
          const fechaFormateada = format(new Date(fact.created_at), 'dd MMMM yyyy');
          return (
            <div key={fact.id} className="fact-item">
              <p>{fact.value}</p>
              <p>Fecha de creación: {fechaFormateada}</p>
              <p>Categorías: {fact.categories.join(', ')}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListaFavoritos;
