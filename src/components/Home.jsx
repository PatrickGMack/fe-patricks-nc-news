import Articles from './Articles';
import Sidebar from './Sidebar';

import React from 'react';

const Home = () => {
  return (
    <div className="Home">
      <Articles />
      <Sidebar />
    </div>
  );
};

export default Home;
