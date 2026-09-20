import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from './src/screens/ContactListScreen';
import AddContactScreen from './src/screens/AddContactScreen';

export type RootStackParamList = {
  Home: undefined;
  AddContact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContactScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

