import React, { useContext } from 'react';
import { List, Avatar } from 'react-native-paper';

import { SafeArea } from '../../../components/utils/safe-area.component';
import { Centered } from '../../../components/utils/centered.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import { AuthContext } from '../../../services/auth/auth.context';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);

  return (
    <SafeArea>
      <Centered>
        <Avatar.Icon size={120} icon="human" />
        <Spacer size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </Centered>
      <List.Section>
        <List.Item
          title="Favourites"
          description="View your favourite restaurants"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
      </List.Section>
      <List.Section>
        <List.Item
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="black" icon="lock-open-outline" />
          )}
          onPress={onLogout}
        />
      </List.Section>
      {/* <Text>Settings</Text>
      <Button
        icon="lock-open-outline"
        mode="contained"
        onPress={() => onLogout()}
      >
        Logout
      </Button> */}
    </SafeArea>
  );
};
