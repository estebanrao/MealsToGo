import React, { useContext, useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components/native';

import { MapSearch } from '../components/map-search.component';
import { MapCallout } from '../components/map-callout.component';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const Map = styled(MapView)`
  height: 100%;
`;

export const MapScreen = ({ navigation: { navigate } }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitudeDelta: latDelta,
          latitude: lat,
          longitude: lng,
          longitudeDelta: 0.03,
        }}
      >
        {restaurants.map((restaurant) => {
          const { name, geometry } = restaurant;
          return (
            <Marker
              key={name}
              title={name}
              coordinate={{
                latitude: geometry.location.lat,
                longitude: geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => navigate('RestaurantDetail', { restaurant })}
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
