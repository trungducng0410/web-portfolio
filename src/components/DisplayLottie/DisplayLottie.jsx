import React from 'react';
import Lottie from 'react-lottie';

// eslint-disable-next-line react/prop-types
const GreetingLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
