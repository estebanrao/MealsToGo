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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassowrd, setRepeatedPassowrd] = useState('');

  const { onRegister, error, isLoading } = useContext(AuthContext);

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
            secure
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        <Spacer size="large" position="bottom">
          <AuthTextInput
            label="Repeat Password"
            password
            value={repeatedPassowrd}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(text) => setRepeatedPassowrd(text)}
          />
        </Spacer>
        {error && (
          <Spacer size="large" position="bottom">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large" position="bottom">
          <AuthButton
            icon="email"
            mode="contained"
            loading={isLoading}
            disabled={isLoading}
            onPress={() => onRegister(email, password, repeatedPassowrd)}
          >
            Register
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
