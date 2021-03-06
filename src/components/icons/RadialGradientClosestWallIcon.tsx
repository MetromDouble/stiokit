import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const RadialGradientClosestWallIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M10.5 3.5l-.8.8c1.5 1.5 1.5 3.8 0 5.3s-3.8 1.5-5.3 0-1.5-3.8 0-5.3l-.9-.8c-2 2-2 5.1 0 7.1s5.1 2 7.1 0 1.9-5.2-.1-7.1z"/><path d="M15 2.5V1H1v1.5h5.3v3.2c-.5.3-.8.7-.8 1.3 0 .8.7 1.5 1.5 1.5S8.5 7.8 8.5 7c0-.6-.3-1-.8-1.3V2.5H15z"/>
    </>
  );

  return onlyPath
  ? path
  : (
    <Icon size={size} {...props}>
      {path}
    </Icon>
  );
};
