import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const BordersTopIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M6 14h1v1H6zm0-6h1v1H6zM2 2h13v1H2zm0 12h1v1H2zm0-8h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm0-6h1v1H2zm0 8h1v1H2zm2-4h1v1H4zm0 6h1v1H4zm8-6h1v1h-1zm0 6h1v1h-1zm-4 0h1v1H8zM8 4h1v1H8zm0 6h1v1H8zm0-2h1v1H8zm0 4h1v1H8zm0-6h1v1H8zm2 2h1v1h-1zm0 6h1v1h-1zm4-8h1v1h-1zm0-2h1v1h-1zm0 8h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0-6h1v1h-1z"/>
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
