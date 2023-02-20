import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export const PokedexScreen = () => {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>PokedexScreen</Text>
    </View>
  );
};
