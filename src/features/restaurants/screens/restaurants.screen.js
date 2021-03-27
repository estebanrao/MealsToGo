import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { SafeArea } from '../../../components/utils/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[16]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name?.toString()}
      />
    </SafeArea>
  );
};
