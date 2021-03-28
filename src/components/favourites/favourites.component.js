import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9;
`;

export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourite, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const isFavourite = favourites.find(
    (fav) => fav.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourite(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
