import React from 'react';

function Banner({ className, action, children }) {
  return (
    <div className={`banner ${className ? className : ''}`}>
      {children}
      <div className="banner-action">{action}</div>
    </div>
  );
}

export default Banner;
