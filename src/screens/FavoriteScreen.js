import { View, Text, Button } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";

export const FavoriteScreen = () => {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <View>
      <Text>Soy fav</Text>
      <Button title="Obtener Favoritos" onPress={checkFavorites} />
    </View>
  );
};
