import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteScreen } from "../screens/FavoriteScreen";

const Stack = createStackNavigator();

export const FavoriteNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
        }}
      />
    </Stack.Navigator>
  );
};
