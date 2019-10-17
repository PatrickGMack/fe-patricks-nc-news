import Articles from './Articles';
import Sidebar from './Sidebar';
import React from 'react';

const Home = props => {
  return (
    <div className="Home">
      <Articles topic={props.slug} />
      <Sidebar />
    </div>
  );
};

export default Home;
