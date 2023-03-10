import React from 'react';
import DataComponent from '../components/DataComponent';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
    <a href="/another-book-app/">Available books</a>
    </div>
<div className="data-component">
      <DataComponent />
      </div>
      </div>
  );
}

export default Home;
