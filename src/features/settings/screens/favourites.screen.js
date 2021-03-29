import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { SafeArea } from '../../../components/utils/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';
import { Centered } from '../../../components/utils/centered.component';
import { Text } from '../../../components/typography/text.component';

import { RestaurantList } from '../../../components/restaurant/restaurant-list.styles';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

export const FavouritesScreen = ({ navigation: { navigate } }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurantList
          isFavScreen
          data={favourites}
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
      ) : (
        <Centered>
          <Spacer size="large">
            <Text variant="label">No Favourite Restaurants</Text>
          </Spacer>
        </Centered>
      )}
    </SafeArea>
  );
};
