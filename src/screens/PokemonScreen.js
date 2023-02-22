import { View, Text } from "react-native";

export const PokemonScreen = (props) => {
  const { navigation, route } = props;
  console.log(route);

  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
    </View>
  );
};
