import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { SafeArea } from '../../../components/utils/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantSearch } from '../components/restaurant-search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation: { navigate } }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={Colors.red800} />
        </LoaderContainer>
      )}
      <RestaurantSearch
        hasFavourites={favourites.length}
        isFavouritesToggled={isFavouritesToggled}
        onFavouritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />
      {isFavouritesToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate('RestaurantDetail', { restaurant: item })}
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name?.toString()}
      />
    </SafeArea>
  );
};
