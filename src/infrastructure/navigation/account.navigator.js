import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../../features/account/screens/account.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

const AccountStack = createStackNavigator();

export const AccountNavigator = () => (
  <AccountStack.Navigator headerMode="none">
    <AccountStack.Screen name="Main" component={AccountScreen} />
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Register" component={RegisterScreen} />
  </AccountStack.Navigator>
);
