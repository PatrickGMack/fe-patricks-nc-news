import Articles from './Articles';
import Sidebar from './Sidebar';
import React from 'react';

const Home = props => {
  return (
    <div className="Home">
      {/* <Router className="HomeRouter">
        <Articles path="/" />
        <Articles path="/articles/topics/:slug" />
      </Router> */}
      <Articles topic={props.slug} />
      <Sidebar />
    </div>
  );
};

export default Home;
