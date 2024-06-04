import React from 'react';
import ItemFact from './ItemFact';

const ListaFacts = ({ facts, onLike }) => {
  return (
    <div>
      {facts.map(fact => (
        <ItemFact key={fact.id} fact={fact} onLike={onLike} />
      ))}
    </div>
  );
};

export default ListaFacts;
