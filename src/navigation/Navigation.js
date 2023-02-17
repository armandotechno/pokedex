import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Account } from '../screens/Account';
import { Favorite } from '../screens/Favorite';
import { Pokedex } from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
   return (
    <Tab.Navigator>
        <Tab.Screen 
            name='Favorite' 
            component={ Favorite } 
            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => (
                    <Icon name='heart' color={ color } size={ size } />
                )
        }} />
        <Tab.Screen 
            name='Pokedex' 
            component={ Pokedex } 
            options={{
                tabBarLabel: '',
                tabBarIcon: () => renderPokeball(),
            }}
        />
        <Tab.Screen 
            name='Account' 
            component={ Account } 
            options={{
                tabBarLabel: 'Mi cuenta',
                tabBarIcon: ({ color, size }) => (
                    <Icon name='user' color={ color } size={ size } />
                )
            }}
        />
    </Tab.Navigator>
   )
}

const renderPokeball = () => {
    return (
        <Image 
            source={ require('../assets/pokeball.png') }
            style={{ width: 65, height: 65, top: -15 }}
        />
    )
}