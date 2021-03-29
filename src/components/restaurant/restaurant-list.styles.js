import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const RestaurantList = styled(FlatList).attrs((props) => {
  return {
    contentContainerStyle: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: props.isFavScreen && 16,
    },
  };
})``;
