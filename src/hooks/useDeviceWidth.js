/* eslint-disable linebreak-style */
import React from 'react';

export default function useDeviceWidth() {
  const [deviceWidth, setDeviceWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const resizeWidth = () => setDeviceWidth(window.innerWidth);
    window.addEventListener('resize', resizeWidth);
    return () => window.removeEventListener('resize', resizeWidth);
  }, []);

  return [deviceWidth];
}
