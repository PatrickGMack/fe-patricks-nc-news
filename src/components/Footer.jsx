import React from 'react';

const Footer = ({ user }) => {
  return (
    <div className="Footer">
      <div>Nothcoders News 2019 All rights reserved.</div>
      <div>Logged in as: {user}</div>
    </div>
  );
};

export default Footer;
