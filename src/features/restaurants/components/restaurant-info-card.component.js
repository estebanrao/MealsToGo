import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Favourites } from '../../../components/favourites/favourites.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

import { Columns, Rating, Image } from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Guerrin',
    // icon,
    photos = [
      'http://viajoconvos.com.ar/wp-content/uploads/2018/11/Guerrin-Frente.jpg',
    ],
    address = '1234 Centro St.',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Favourites restaurant={restaurant} />
      <Image key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Spacer position="top" size="large">
          <Text variant="h5">{name}</Text>
        </Spacer>
        <Columns>
          <Rating>
            {ratingArray.map((e, i) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${i}`}
              />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="medium">
            {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
          </Spacer>
          {/* Icon goes here */}
        </Columns>
        <Text>{address}</Text>
      </Card.Content>
    </Card>
  );
};
