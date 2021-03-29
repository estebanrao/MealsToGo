import React, { useContext, useState } from 'react';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthTextInput,
} from '../components/account.styles';

import { AuthContext } from '../../../services/auth/auth.context';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLogin, error, isLoading } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="h3">MealsToGo</Text>
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <AuthTextInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </Spacer>
        <Spacer size="large" position="bottom">
          <AuthTextInput
            label="Password"
            password
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <Spacer size="large" position="bottom">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large" position="bottom">
          <AuthButton
            icon="lock-open-outline"
            loading={isLoading}
            disabled={isLoading}
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
        <AuthButton
          icon="backspace"
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
