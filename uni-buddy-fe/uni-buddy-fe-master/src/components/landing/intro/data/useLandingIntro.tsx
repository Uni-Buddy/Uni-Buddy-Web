import React from 'react';

const useLandingIntro = (setIsHeaderlineScreen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleToggleUpDownScreen = () => {
    setIsHeaderlineScreen((pre) => !pre);
  };
  return {
    handleToggleUpDownScreen,
  };
};

export default useLandingIntro;
