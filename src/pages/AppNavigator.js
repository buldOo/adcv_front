import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//Import pages
import Identification from './identification/Identification';

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Identification"
        component={Identification}
      />
    </Stack.Navigator>
  );
};  

export default AppNavigator;