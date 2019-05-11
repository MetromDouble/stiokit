import React from 'react';
import { Icon, IIconProps } from 'src/components/icons/Icon';

export const ZoomOutIcon: React.FC<IIconProps> = ({ size, onlyPath }) => {
  const path = (
    <>
      <path d="M14.2 12.8L12 10.6c.6-.9 1-2 1-3.1 0-3-2.5-5.5-5.5-5.5S2 4.5 2 7.5 4.5 13 7.5 13c1.2 0 2.2-.4 3.1-1l2.2 2.2 1.4-1.4zM3.5 7.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
      <path d="M10.5 6.8v1.5h-6V6.8z" />
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
