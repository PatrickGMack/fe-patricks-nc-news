import React from 'react';
import { Link } from '@reach/router';

const Title = () => {
  const northCoders = ' Northcoders News ';
  const start = '<';
  const end = '/>';
  return (
    <header className="Title #212121 grey darken-4">
      <Link to="/">
        <h1>
          <span className="#b71c1c-text red-text darken-4">{start}</span>
          <span className="#ffffff-text white-text">{northCoders}</span>
          <span className="#b71c1c-text red-text darken-4">{end}</span>
        </h1>
      </Link>
    </header>
  );
};

export default Title;
