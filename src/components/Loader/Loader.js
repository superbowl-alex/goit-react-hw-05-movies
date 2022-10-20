import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

const Loader = () => {
  return (
    <>
      <RingLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
