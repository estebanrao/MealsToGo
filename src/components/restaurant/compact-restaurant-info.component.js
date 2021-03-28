import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';

import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  width: 100px;
  height: 100px;
`;

const Item = styled.View`
  max-width: 100px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = Platform.OS === 'android' ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Spacer position="top" size="medium" />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
