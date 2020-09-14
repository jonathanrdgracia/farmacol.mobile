import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from '../Screen/ProductScreen'

const Stack= createStackNavigator();

export default function ProducsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name= 'ProductScreen'
                component= {ProductScreen}
                options={{ 
                    title:'Productos',
                    headerStyle:{
                        backgroundColor: '#ffda00',
                        alignItems:'center',
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    )
}