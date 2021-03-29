import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/account-bg.jpg'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const AccountContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[16]};
  margin-top: ${(props) => props.theme.space[16]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const AuthTextInput = styled(TextInput)`
  width: 300px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 200px;
`;
