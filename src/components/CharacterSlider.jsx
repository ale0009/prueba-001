import React from 'react';
import { Link } from 'react-router-dom';

const characters = [
  {
    id: 1,
    name: 'Kaveh',
    description: 'A renowned architect from Sumeru who perhaps cares a bit too much about too many things. He is an aesthete troubled by reality.',
    image: '/path-to-kaveh-image.jpg'
  },
  // Add more characters here
];

function CharacterSlider() {
  return (
    <div className="character-slider">
      {characters.map((character) => (
        <div key={character.id} className="character-slide">
          <img src={character.image} alt={character.name} />
          <div className="character-info">
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <Link to={`/character/${character.id}`} className="read-more">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterSlider;