import React from 'react';
import { format } from 'date-fns';

const ItemFact = ({ fact, onLike }) => {
  const fechaFormateada = format(new Date(fact.created_at), 'dd MMMM yyyy');

  return (
    <div className="fact-item">
      <p>{fact.value}</p>
      <p>Fecha de creación: {fechaFormateada}</p>
      <p>Categorías: {fact.categories.join(', ')}</p>
      <button onClick={() => onLike(fact)}>Me gusta</button>
    </div>
  );
};

export default ItemFact;
