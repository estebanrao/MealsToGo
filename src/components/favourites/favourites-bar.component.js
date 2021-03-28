import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';

const FavouritesWrapper = styled.View`
  padding-top: ${(props) => props.theme.space[16]};
  padding-bottom: ${(props) => props.theme.space[16]};
  padding-left: 0;
  padding-right: 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[16]};
  margin-top: 0;
  border-radius: ${(props) => props.theme.space[4]};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(' ').join('');

          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
