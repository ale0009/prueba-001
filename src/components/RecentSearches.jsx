import React from 'react';

const recentSearches = [
  'Kaveh x Alhaitham',
  'Haitcaveh',
  'Kaveh ascension guide',
  'Kaveh cosplay',
  'Kaveh artifact set'
];

function RecentSearches() {
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecentSearches;