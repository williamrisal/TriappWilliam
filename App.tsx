import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Scan } from './screens/Scan';

interface iconProps {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const handleTabBarIcon =
  (route: string) =>
  ({ focused, color, size }: iconProps) => {
    let iconName: React.ComponentPropsWithRef<typeof Ionicons>['name'] =
      'ios-information-circle';

    if (route === 'Scan') {
      iconName = focused ? 'barcode' : 'barcode-outline';
    }
    return <Ionicons name={iconName} color={color} size={size} />;
  };

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: handleTabBarIcon(route.name),
        })}>
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
