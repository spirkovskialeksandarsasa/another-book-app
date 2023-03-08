import React from 'react';
import DataComponent from '../components/DataComponent';
import './Home.css';

function Home() {
  return (
    <div className="main">
      <div className="header">
    <h1>Available books</h1>
    </div>
<div className="data-component">
      <DataComponent />
      </div>
      </div>
  );
}

export default Home;
