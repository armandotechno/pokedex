import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { PokemonScreen } from "../screens/PokemonScreen";

const Stack = createStackNavigator();

export const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
        }}
      />

      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};
