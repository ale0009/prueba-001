import React from 'react';

const elements = [
  {
    name: 'Dendro Element',
    description: 'Dendro is one of the seven elements. Its associated Archon is Lesser Lord Kusanali, the God of Wisdom.',
    icon: '/path-to-dendro-icon.svg'
  },
  {
    name: 'Sumeru',
    description: 'Sumeru is one of the seven nations of Teyvat. It is the city-state that worships Lesser Lord Kusanali, the God of Wisdom.',
    icon: '/path-to-sumeru-icon.svg'
  },
  {
    name: 'Kshahrewar',
    description: 'Kshahrewar is one of the Six Darshans of Sumeru Academia. It is associated with mechanical engineering.',
    icon: '/path-to-kshahrewar-icon.svg'
  }
];

function ElementInfo() {
  return (
    <div className="element-info">
      {elements.map((element, index) => (
        <div key={index} className="element">
          <img src={element.icon} alt={element.name} />
          <div>
            <h4>{element.name}</h4>
            <p>{element.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ElementInfo;