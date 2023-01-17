import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//Import pages
import Login from './login/Login';

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};  

export default AppNavigator;