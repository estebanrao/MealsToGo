import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AnimationWrapper,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          // resizeMode="cover"
          source={require('../../../../assets/food-animation.json')}
        />
      </AnimationWrapper>
      <Text variant="h3">MealsToGo</Text>
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </AuthButton>
        </Spacer>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
