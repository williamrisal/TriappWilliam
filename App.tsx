import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Scan } from './App/Component/Screens/Scan';
import { History } from './App/Component/Screens/History/History';
import { Footer } from './App/Component/Screens/Footer';
import { useState } from 'react';
import Setting from './App/Component/Screens/setting';
import { Settings } from 'react-native';

interface iconProps {
  focused: boolean;
  color: string;
  size: number;
}

const handleTabBarIcon = (route: string) => ({ focused, color, size }: iconProps) => {
  let iconName: React.ComponentPropsWithRef<typeof Ionicons>['name'] = 'ios-information-circle';

  if (route === 'Scan')
  iconName = focused ? 'barcode' : 'barcode-outline';
  return <Ionicons name={iconName} color={color} size={size} />;
};

export default function App() {
  const Tab = createBottomTabNavigator();
  const [footerChose, setFooterChose] = useState(1);

  const ChooseScreen = () => {
    switch (footerChose) {
      case 0:
        return <Tab.Screen
                  name="History" component={History}
                  options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
                />
      case 1:
        return <Tab.Screen
                  name="Scan" component={Scan}
                  options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
                />
      /*case 2:
        return <Tab.Screen // affichage Settings
                  name="Settings" component={Setting}
                  options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
                />*/
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: handleTabBarIcon(route.name),
        })}
      >
      {ChooseScreen()}
      </Tab.Navigator>
      <Footer
        value={footerChose}
        setValue={setFooterChose}
      />
    </NavigationContainer>
  );
}