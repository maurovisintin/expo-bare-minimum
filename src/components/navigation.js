import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Test = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="hello"
            >
                <Stack.Screen
                    name="hello"
                    component={() => (
                        <Text>Open up App.tsx to start working on your app!</Text>
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Test;