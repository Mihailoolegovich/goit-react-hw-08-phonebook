import React from 'react';

export default function HomePage() {
  return (
    <>
      <img
        src={require('../Image/welcome.png')}
        alt="Welcome"
        style={{
          width: '50%',
          height: 'auto',
          paddingLeft: '25%',
          margin: '110px auto 0',
        }}
      />
    </>
  );
}
