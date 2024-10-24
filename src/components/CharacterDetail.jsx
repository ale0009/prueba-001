import React from 'react';
import { useParams } from 'react-router-dom';

const characters = [
  {
    id: 1,
    name: 'Carsis Fedelian',
    image: 'https://example.com/carsis.jpg',
    description: 'Carsis is very innocent and has a very black and white world view at the beginning of the story. The Fedelians are known Carsis is considered the most upstanding of them all. He seems to be able to cause fear in people with just a look.',
    affiliation: 'Fedelian Family',
    status: 'Alive',
    relationship: 'Single',
    alias: 'None',
    specialAbilities: 'Intimidation',
  },
  {
    id: 2,
    name: 'Dion Agriche',
    image: 'https://example.com/dion.jpg',
    description: 'Dion is very intelligent and ruthless, even compared to the other Agriche children. He rarely shows emotion unless it is involving his half-sister Roxana Agriche, but has shown to be as sadistic as his parents when he attacked Carsis Fedelian.',
    affiliation: 'Agriche Family',
    status: 'Alive',
    relationship: 'Single',
    alias: 'None',
    specialAbilities: 'Intelligence, Ruthlessness',
  },
];

function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find(c => c.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h2 className="character-name">{character.name}</h2>
        <p className="character-description">{character.description}</p>
        <h3>About</h3>
        <ul>
          <li><strong>Affiliation:</strong> {character.affiliation}</li>
          <li><strong>Status:</strong> {character.status}</li>
          <li><strong>Relationship:</strong> {character.relationship}</li>
          <li><strong>Alias:</strong> {character.alias}</li>
          <li><strong>Special Abilities:</strong> {character.specialAbilities}</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;