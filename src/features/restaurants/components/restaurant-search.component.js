import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[16]};
`;

export const RestaurantSearch = ({
  hasFavourites,
  isFavouritesToggled,
  onFavouritesToggle,
}) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for location"
        icon={
          !hasFavourites
            ? null
            : isFavouritesToggled
            ? 'heart'
            : 'heart-outline'
        }
        onIconPress={hasFavourites ? onFavouritesToggle : null}
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
