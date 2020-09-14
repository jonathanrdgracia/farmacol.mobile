import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import ProducsStack from './ProductsStack';
import SaleStack from './SaleStack';
const TabNavigationState= createBottomTabNavigator();

const Navigation = () => {
    return (
       <NavigationContainer>
           <TabNavigationState.Navigator
               initialRouteName= 'SaleStack'
                tabBarOptions={{
                    inactiveTintColor: '#b48484',
                    activeTintColor: '#000',
                }}
                screenOptions= {({route})=> ({
                    tabBarIcon: ({color})=>screenOptions(route,color),
                })}
           >
                <TabNavigationState.Screen
                    name='SaleStack'
                    component= { SaleStack }
                    options={{
                        title:'Ventas',
                    
                    }}
                 />
                 <TabNavigationState.Screen
                    name='ProductScreen'
                    component= { ProducsStack }
                    options={{
                        title:'Productos',
                    
                    }}
                 />
           </TabNavigationState.Navigator>
           
       </NavigationContainer>
    )
}

function screenOptions(route,color){
    let iconName;

    switch (route.name) {
        case 'SaleOrderScreenStacks':
          iconName= 'compass-outline'  
            break;
        case 'SaleStack':
          iconName= 'heart-outline'  
            break;
        case 'ProductScreen':
                iconName= 'home'  
                  break;
        default:
            break;
    }
    return(
        <Icon type= 'material-community' name={iconName} size={22} color={color} />
    )
}

export default Navigation
