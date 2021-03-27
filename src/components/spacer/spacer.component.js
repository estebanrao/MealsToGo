import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizesVariants = {
  small: 4,
  medium: 8,
  large: 16,
};

const positionsVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizesVariants[size];
  const selectedPosition = positionsVariant[position];
  const selectedSize = theme.space[sizeIndex];
  return `${selectedPosition}:${selectedSize}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
