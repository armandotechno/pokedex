import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../screens/AccountScreen";

const Stack = createStackNavigator();

export const AccountNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
};
