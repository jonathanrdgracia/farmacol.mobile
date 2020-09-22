import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ProductActivityScreen from '../Screen/ProductActivityScreen'
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Stack= createStackNavigator()

const SaleStack=()=>{
    
    return(
        <Stack.Navigator>
            <Stack.Screen
            options={{
                headerRight: () => (
                        <TouchableOpacity
                        style={{alignItems: 'flex-end', margin: 16}}
                        onPress={{}}
                        >
                        
                        <FontAwesome5 name='ellipsis-v' size={16} color ='#fff' />
                    </TouchableOpacity>
                        ),
                headerTintColor:'#fff',
                title: 'Ventas',
                headerShown: false,
                headerStyle:{
                backgroundColor: '#ffda00',
                alignContent:'center',
                alignItems:'center'
                }
            
            }}
                name='SaleStack'
                component={ProductActivityScreen}
            />
        </Stack.Navigator>
    )
}

export default SaleStack;