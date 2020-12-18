import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import Portal from './screens/Portal';
import CreateNews from './screens/CreateNews';

const { Navigator, Screen } = createBottomTabNavigator();

const icons: any = {
  Portal: {
    lib: Icon,
    name: 'newspaper'
  },
  CreateNews: {
    lib: Icon,
    name: 'cash-register'
  }
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === 'ios' ? 60 : 64
          },
          tabStyle: {
            paddingBottom: Platform.OS === 'ios' ? 15 : 0
          },
          iconStyle: {
            height: Platform.OS === 'ios' ? 24 : 20,
            fontSize: 13
          }
        }}
      >
        <Screen name="Portal" component={Portal} />
        <Screen name="CreateNews" component={CreateNews} options={{ title: 'Cadastrar' }} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;