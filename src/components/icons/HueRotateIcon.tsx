import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const HueRotateIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M10 4c-.7 0-1.4.2-2 .6-.6-.4-1.3-.6-2-.6-2.2 0-4 1.8-4 4s1.8 4 4 4c.7 0 1.4-.2 2-.6.6.3 1.3.6 2 .6 2.2 0 4-1.8 4-4s-1.8-4-4-4zM7.5 6h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm2 2c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5zM6 11c-1.7 0-3-1.3-3-3s1.3-3 3-3c.4 0 .8.1 1.1.2C6.4 5.9 6 6.9 6 8s.4 2.1 1.1 2.8c-.3.1-.7.2-1.1.2zm2.5-1h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm1.5 1c-.4 0-.8-.1-1.1-.2.7-.7 1.1-1.7 1.1-2.8s-.4-2.1-1.1-2.8c.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3s-1.3 3-3 3z" />
    </>
  );

  return onlyPath
    ? path
    : (
      <Icon size={size}>
        {path}
      </Icon>
    );
};
