import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const PositionFixedIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11 3V2H8v1h1v4H7v2H3V8H2v3h1v-1h4v2h5V7h-2V3z"/><path d="M13 2h-1v1h1v1h-2v1h2v8H3v-1H2v2h12V2zM7 4V2H2v5h1V5h5V4H7zM3 4V3h1v1H3zm2 0V3h1v1H5z"/>
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
