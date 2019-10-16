import React from 'react';
import { Link } from '@reach/router';

const Title = () => {
  const northCoders = '< Northcoders News />';
  return (
    <header className="Title">
      <Link to="/">
        <h1>{northCoders}</h1>
      </Link>
    </header>
  );
};

export default Title;
