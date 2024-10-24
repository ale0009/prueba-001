import React from 'react';
import { Link } from 'react-router-dom';
import CharacterSlider from './CharacterSlider';
import RecentSearches from './RecentSearches';
import ElementInfo from './ElementInfo';

function HomePage() {
  return (
    <div className="home-page">
      <div className="top-bar">
        <img src="/path-to-logo.svg" alt="Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button>Search</button>
        </div>
        <div className="user-icon">@aer.svg</div>
      </div>

      <CharacterSlider />

      <div className="content-section">
        <div className="left-column">
          <h2>Artworks</h2>
          {/* Add artwork thumbnails here */}
          <Link to="/artworks" className="view-more">View More</Link>
        </div>
        <div className="right-column">
          <RecentSearches />
          <ElementInfo />
        </div>
      </div>
    </div>
  );
}

export default HomePage;