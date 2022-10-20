import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { WrapSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <WrapSpinner>
      <PulseLoader
        color={'#36d7b7'}
        size={30}
        speedMultiplier={0.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </WrapSpinner>
  );
};

export default Loader;
