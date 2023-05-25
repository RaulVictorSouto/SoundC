import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import  ListarMusicas  from './ListarMusicas.js';
import  ReproduzirMusicas from './ReproduzirMusicas.js';

const Stack = createStackNavigator();

export function AppNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MusicList" component={ListarMusicas}/>
            <Stack.Screen name="Reproduction" component={ReproduzirMusicas}/>
        </Stack.Navigator>
    );
}