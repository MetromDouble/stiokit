import React from 'react';
import { Icon, NoIcon, IComboIconProps } from 'src/components/icons/Icon';
import { ZoomInIcon } from 'src/components/icons/ZoomInIcon';
import { ZoomOutIcon } from 'src/components/icons/ZoomOutIcon';

type ComboType =
  'in' |
  'out';
type ComboTypeIndex = {
  [index in ComboType]: React.ReactNode;
};

const comboMap: ComboTypeIndex = {
  'in': (<ZoomInIcon onlyPath />),
  'out': (<ZoomOutIcon onlyPath />),
};

export const ZoomComboIcon: React.FC<IComboIconProps<ComboType>> = ({ size, type }) => {
  return (
    <Icon size={size}>
      {Object.keys(comboMap).reduce(
        (prev: React.ReactNode, curr): React.ReactNode => type && curr === type ? comboMap[curr] : prev,
        (<NoIcon />)
      )}
    </Icon>
  );
};
