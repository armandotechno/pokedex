import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";

export const PokemonScreen = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
};
