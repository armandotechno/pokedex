// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from "@react-navigation/stack";
import { PokedexScreen } from "../screens/PokedexScreen";
import { PokemonScreen } from "../screens/PokemonScreen";

const Stack = createStackNavigator();

export const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
