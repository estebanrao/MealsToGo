import camelize from 'camelize';

import { mocks, mockImages } from './mock';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      (p) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
