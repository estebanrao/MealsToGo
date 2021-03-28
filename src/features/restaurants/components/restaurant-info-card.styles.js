import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Columns = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[8]};
`;

export const Image = styled(Card.Cover)`
  border-radius: 5px;
`;
