import React from 'react';
import { Link } from 'react-router-dom';

const characters = [
  {
    id: 1,
    name: 'Carsis Fedelian',
    image: 'https://example.com/carsis.jpg',
    description: 'Carsis is very innocent and has a very black and white world view at the beginning of the story. The Fedelians are known Carsis is considered the most upstanding of them all. He seems to be able to cause fear in people with just a look.',
  },
  {
    id: 2,
    name: 'Dion Agriche',
    image: 'https://example.com/dion.jpg',
    description: 'Dion is very intelligent and ruthless, even compared to the other Agriche children. He rarely shows emotion unless it is involving his half-sister Roxana Agriche, but has shown to be as sadistic as his parents when he attacked Carsis Fedelian.',
  },
];

function CharacterList() {
  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} className="character-image" />
          <div className="character-info">
            <h3 className="character-name">{character.name}</h3>
            <p className="character-description">{character.description}</p>
            <Link to={`/character/${character.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;